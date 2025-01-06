import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Image as ChakraImage,
  Button,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { teamMembers } from "../TeamWithNews/teamMembers";
const BATCH_SIZE = 5;

const Papers = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toast = useToast();

  useEffect(() => {
    const fetchArticlesFromPubmed = async () => {
      setLoading(true);
      setError(null);

      try {
        const uniqueArticles = new Map();

        // Extract last names from teamMembers for the PubMed query
        const query = teamMembers
          .map((member) => `"${member.name.split(" ").slice(-1)[0]}"`)
          .join(" OR ");

        // Fetch PMIDs for all team members in a single request
        const searchResponse = await fetch(
          `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${encodeURIComponent(
            query
          )}&retmode=json&retmax=50&email=youremail@example.com`
        );

        if (!searchResponse.ok) {
          throw new Error(`E-Search failed: ${searchResponse.statusText}`);
        }

        const searchData = await searchResponse.json();
        const pmids = searchData.esearchresult.idlist || [];

        if (pmids.length === 0) {
          console.log("No articles found for the given query.");
          setArticles([]);
          return;
        }

        // Split PMIDs into batches
        const pmidBatches = [];
        for (let i = 0; i < pmids.length; i += BATCH_SIZE) {
          pmidBatches.push(pmids.slice(i, i + BATCH_SIZE));
        }

        // Fetch article summaries for each batch
        const batchPromises = pmidBatches.map(async (batch) => {
          const batchResponse = await fetch(
            `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${batch.join(
              ","
            )}&retmode=json&email=youremail@example.com`
          );

          if (!batchResponse.ok) {
            throw new Error(`E-Summary failed: ${batchResponse.statusText}`);
          }

          const batchData = await batchResponse.json();
          return batchData.result;
        });

        const allResults = await Promise.all(batchPromises);

        // Process each result
        allResults.forEach((result) => {
          Object.keys(result).forEach((pmid) => {
            if (pmid !== "uids" && !uniqueArticles.has(pmid)) {
              const articleData = result[pmid];

              // Initialize PDF-related variables
              let hasPdf = false;
              let pdfLink = null;

              // Check for PMC ID in articleids
              if (
                articleData.articleids &&
                Array.isArray(articleData.articleids)
              ) {
                const pmcIdObj = articleData.articleids.find(
                  (id) => id.idtype === "pmc" && id.value.startsWith("PMC")
                );

                if (pmcIdObj) {
                  hasPdf = true;
                  // Construct the PDF link using the PMC ID
                  pdfLink = `https://www.ncbi.nlm.nih.gov/pmc/articles/${pmcIdObj.value}/pdf/`;
                }
              }
              //set full article inside map to be unique on pmid
              uniqueArticles.set(pmid, {
                title: articleData.title || "No title available",
                authors:
                  articleData.authors
                    ?.map((auth) => auth.name)
                    .filter(Boolean) || [],
                abstract: "No abstract available", // PubMed doesn't include abstracts in eSummary
                pubmedLink: `https://pubmed.ncbi.nlm.nih.gov/${pmid}/`,
                pdfAvailable: hasPdf,
                pdfLink: hasPdf ? pdfLink : null,
              });
            }
          });
        });

        setArticles(Array.from(uniqueArticles.values()));
      } catch (err) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchArticlesFromPubmed();
  }, []);

  useEffect(() => {
    if (error) {
      toast({
        title: "Error fetching PubMed articles",
        description: error,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [error, toast]);

  return (
    <Box w="100%" minH="100vh" bg="white">
      <Box
        as="section"
        bgGradient="linear(to-r, teal.500, cyan.600)"
        color="white"
        textAlign="center"
        py={{ base: 20, md: 28 }}
        px={4}
        mb={16}
      >
        <Container maxW="container.lg">
          <Heading as="h1" size="3xl" mb={4} textTransform="uppercase">
            ARTICLES PUBLISHED
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            maxW="600px"
            mx="auto"
            mb={6}
          >
            Below are recent papers authored or co-authored by our team. Data
            fetched from PubMed.
          </Text>
          <Button
            as={RouterLink}
            to="/team"
            size="lg"
            colorScheme="pink"
            variant="solid"
            textTransform="uppercase"
          >
            Back to Team
          </Button>
        </Container>
      </Box>

      <Container maxW="container.xl" pb={16}>
        {loading ? (
          <Flex justify="center" align="center" minH="200px">
            <Spinner size="xl" />
          </Flex>
        ) : (
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={4}
            justifyItems="center"
          >
            {articles.map((article, idx) => {
              // Match authors based on last names with teamMembers
              const teamAuthors = teamMembers.filter((member) =>
                article.authors.some((author) =>
                  author.startsWith(member.name.split(" ").slice(-1)[0])
                )
              );

              // Build array of images for each recognized team author using the image path from teamMembers
              const coverImages = teamAuthors.map((member, i) => (
                <ChakraImage
                  key={i}
                  src={member.image} // Use the image path from teamMembers
                  alt={`${member.name}'s photo`}
                  objectFit="cover"
                  w="100%"
                  h={teamAuthors.length === 1 ? "200px" : "100px"}
                  mb={
                    teamAuthors.length > 1 && i !== teamAuthors.length - 1
                      ? 2
                      : 0
                  }
                  loading="lazy"
                />
              ));

              console.log("cover im", article);

              return (
                <Flex
                  key={idx}
                  position="relative"
                  zIndex={0}
                  direction={{ base: "column", md: "row" }}
                  w={{ base: "full", md: "90%" }}
                  bg="gray.200"
                  borderWidth={1}
                  borderColor="gray.400"
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="md"
                >
                  <Flex
                    flex="1.2"
                    direction="column"
                    align="center"
                    justify="flex-start"
                    bg="white"
                    p={2}
                  >
                    {coverImages.length > 0 ? (
                      coverImages
                    ) : (
                      <ChakraImage
                        src="/foto/tbk1.png"
                        alt="placeholder"
                        objectFit="cover"
                        w="100%"
                        h="100%"
                        loading="lazy"
                      />
                    )}
                  </Flex>

                  <Flex
                    flex="1"
                    direction="column"
                    p={4}
                    pt={2}
                    align="flex-start"
                    justify="space-between"
                    textAlign="left"
                  >
                    <Box>
                      <Heading as="h2" size="md" mb={2} color="gray.800">
                        {article.title}
                      </Heading>

                      {article.authors && (
                        <Text
                          fontWeight="bold"
                          color="gray.600"
                          mb={3}
                          textTransform="uppercase"
                          fontSize="sm"
                        >
                          {[
                            ...teamAuthors.map((member) => member.name),
                            ...article.authors.filter(
                              (author) =>
                                !teamMembers.some((member) =>
                                  author.startsWith(
                                    member.name.split(" ").slice(-1)[0]
                                  )
                                )
                            ),
                          ]
                            .join(", ")
                            .substring(0, 100) +
                            (article.authors.length > 50 ? "..." : "")}
                        </Text>
                      )}
                    </Box>

                    <Flex
                      align="center"
                      justify="space-between"
                      w={"100%"}
                      gap={3}
                    >
                      {article.pubmedLink && (
                        <Button
                          as="a"
                          href={article.pubmedLink}
                          colorScheme="pink"
                          size="sm"
                          variant="solid"
                          textTransform="uppercase"
                          target="_blank"
                          leftIcon={<ArrowForwardIcon />}
                        >
                          PubMed
                        </Button>
                      )}
                      {article.pdfAvailable ? (
                        <Button
                          as="a"
                          href={article.pdfLink}
                          colorScheme="teal"
                          size="sm"
                          variant="solid"
                          textTransform="uppercase"
                          target="_blank"
                        >
                          PDF
                        </Button>
                      ) : (
                        <Text fontSize="xs" color="red.600">
                          No PDF
                        </Text>
                      )}
                    </Flex>
                  </Flex>
                </Flex>
              );
            })}
          </SimpleGrid>
        )}
      </Container>
    </Box>
  );
};

export default Papers;
