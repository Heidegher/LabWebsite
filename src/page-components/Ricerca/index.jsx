// Ricerca.jsx
import React from "react";
import {
  Box,
  Flex,
  Container,
  Heading,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  PhoneIcon,
  AttachmentIcon,
  InfoOutlineIcon,
} from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const Ricerca = () => {
  return (
    <Box w="100%" minH="100vh" bg="gray.50">
      {/* ==================== HERO BAND ==================== */}
      <Box
        as="section"
        position="relative"
        h="100vh" // Full viewport height
        bgImage="url('/foto/brain_hero.png')"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        {/* Dark overlay */}
        <Box
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          bg="rgba(0,0,0,0.4)"
        />

        {/* Hero content */}
        <Flex
          position="relative"
          zIndex={1}
          direction="column"
          alignItems="center"
          justifyContent="center"
          h="100%"
          textAlign="center"
          p={4}
        >
          <Heading
            as="h1"
            size="3xl"
            color="white"
            textShadow="2px 2px 8px rgba(0,0,0,0.7)"
            mb={6}
          >
            Our Research
          </Heading>

          <Text
            color="white"
            fontSize={{ base: "lg", md: "2xl" }}
            maxW="700px"
            mb={8}
            textShadow="1px 1px 5px rgba(0,0,0,0.7)"
          >
            Delving into the mechanisms that drive neurodegeneration, focusing
            on ALS and related disorders. We combine cutting-edge methods to
            uncover novel therapeutic strategies.
          </Text>

          {/* CTA button with a down arrow icon */}
          <Button
            as="a"
            href="#als"
            size="xl"
            fontWeight="bold"
            textTransform="uppercase"
            bgGradient="linear(to-r, teal.400, cyan.500)"
            color="white"
            rightIcon={<ChevronDownIcon boxSize={6} />}
            px={{ base: 8, md: 10 }}
            py={{ base: 6, md: 7 }}
            transition="all 0.3s ease"
            _hover={{
              bgGradient: "linear(to-r, teal.500, cyan.600)",
              transform: "scale(1.05)",
              textDecoration: "none",
            }}
            _active={{
              transform: "scale(0.98)",
            }}
          >
            Learn More
          </Button>
        </Flex>
      </Box>

      {/* ==================== ALS SECTION (WHITE BAND) ==================== */}
      <Box as="section" id="als" bg="white" py={{ base: 10, md: 16 }}>
        <Container maxW="1400px">
          <Flex
            direction={{ base: "column", md: "row" }}
            alignItems="center"
            justifyContent="center"
            gap={12}
          >
            {/* Text First */}
            <Box flex="1">
              <Heading as="h2" size="lg" mb={4}>
                Amyotrophic Lateral Sclerosis (ALS)
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }}>
                ALS is a devastating neurodegenerative disease leading to
                progressive paralysis. Genetic discoveries have opened doors to
                new therapeutic interventions, yet there is still no treatment
                that significantly alters its course. Our research aims to shed
                light on the cellular and molecular processes driving ALS
                progression, paving the way for novel therapeutic strategies.
              </Text>
            </Box>

            {/* Image Second, Centered */}
            <Box flex="1.2" display="flex" justifyContent="center">
              <Image
                src="/foto/schema_research.png"
                alt="ALS Schema"
                w="100%"
                h="auto"
                borderRadius="md"
                boxShadow="none"
                // If you want max width, for ex:
                // maxW="600px"
              />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* ==================== CTA BAND #3: TEAM ==================== */}
      <Box as="section" bg="teal.200" py={{ base: 10, md: 16 }}>
        <Container maxW="1400px">
          <Flex direction="column" align="center" textAlign="center" gap={6}>
            <Heading as="h2" size="xl">
              Meet Our Team
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }}>
              Want to learn more about the people behind our research? Meet the
              dedicated team working to revolutionize ALS treatments.
            </Text>
            <Button
              as={RouterLink}
              to="/team"
              size="lg"
              colorScheme="purple"
              variant="solid"
              textTransform="uppercase"
              rightIcon={<InfoOutlineIcon />}
            >
              Meet the Team
            </Button>
          </Flex>
        </Container>
      </Box>

      {/* ==================== NEUROIMMUNE SECTION (GRAY.100) ==================== */}
      <Box as="section" bg="gray.100" py={{ base: 10, md: 16 }}>
        <Container maxW="1400px">
          <Flex
            direction={{ base: "column", md: "row" }}
            alignItems="center"
            justifyContent="center"
            gap={12}
          >
            {/* Text */}
            <Box flex="1">
              <Heading as="h2" size="lg" mb={4}>
                Neuroimmune Interactions in ALS
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} mb={4}>
                Glial cells play a critical role in ALS pathogenesis.
                Dysregulated immune responses can create a vicious cycle that
                further damages motor neurons. We study how these interactions
                fuel disease progression, focusing on how chronic inflammation
                leads to neuronal dysfunction.
              </Text>
              <Text fontSize={{ base: "md", md: "lg" }} mb={4}>
                Recent data suggest that modulating the immune response in glial
                cells could significantly reduce neuronal damage. Our lab
                employs advanced imaging techniques to visualize glia-neuron
                interactions in real time, aiming to identify key molecular
                checkpoints that can disrupt disease onset or slow progression.
              </Text>
              <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }}>
                By uncovering the molecular pathways that drive
                neuroinflammation, we aim to identify targets that could halt or
                slow neurodegeneration in ALS.
              </Text>
            </Box>

            {/* Image */}
            <Box flex="1.2" display="flex" justifyContent="center">
              <Image
                src="/foto/RESEARCH immagine1.jpg"
                alt="Neuroimmune interactions"
                w="100%"
                borderRadius="md"
                boxShadow="none"
              />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* ==================== CTA BAND #2 ==================== */}
      <Box as="section" bg="pink.100" py={{ base: 10, md: 16 }}>
        <Container maxW="1400px">
          <Flex direction="column" align="center" textAlign="center" gap={6}>
            <Heading as="h2" size="xl">
              Explore Our Latest Papers
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }}>
              Stay up-to-date with the findings that drive our mission to defeat
              ALS and improve patient outcomes.
            </Text>
            <Button
              as={RouterLink}
              to="/papers"
              size="lg"
              colorScheme="pink"
              variant="solid"
              textTransform="uppercase"
              rightIcon={<AttachmentIcon />}
            >
              View Papers
            </Button>
          </Flex>
        </Container>
      </Box>

      {/* ==================== TBK1 SECTION (WHITE BAND) - Inverted Layout ==================== */}
      <Box as="section" bg="white" py={{ base: 10, md: 16 }}>
        <Container maxW="1400px">
          <Flex
            direction={{ base: "column", md: "row-reverse" }}
            alignItems="center"
            justifyContent="center"
            gap={12}
          >
            {/* Text first on mobile, right on md */}
            <Box flex="1">
              <Heading as="h2" size="lg" mb={4}>
                TBK1 in ALS
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} mb={4}>
                TBK1 mutations are linked to both familial and sporadic ALS.
                This kinase influences autophagy and innate immunity—two
                processes central to ALS pathology. By controlling how cells
                clear misfolded proteins and respond to neuronal stress, TBK1
                can significantly impact the onset and progression of ALS.
              </Text>
              <Text fontSize={{ base: "md", md: "lg" }} mb={4}>
                Our ongoing research examines how TBK1 mutations alter
                inflammatory signaling and disrupt protein homeostasis. We
                employ mouse models and human-derived cell lines to pinpoint
                molecular targets for intervention.
              </Text>
              <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }}>
                By modeling TBK1-ALS in mice and human cells, our lab aims to
                pinpoint molecular targets that could slow disease progression.
              </Text>
            </Box>

            <Box flex="1.2" display="flex" justifyContent="center">
              <Image
                src="/foto/tbk1.png"
                alt="TBK1 in ALS"
                w="100%"
                borderRadius="md"
                boxShadow="none"
              />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* ==================== CTA BAND #1 ==================== */}
      <Box as="section" bg="teal.200" py={{ base: 10, md: 16 }}>
        <Container maxW="1400px">
          <Flex
            direction="column"
            align="center"
            justify="center"
            textAlign="center"
            gap={6}
          >
            <Heading as="h2" size="xl">
              Have Questions?
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }}>
              Our team is here to help. Contact us to learn more about our
              research or discuss potential collaborations.
            </Text>
            <Button
              as={RouterLink}
              to="/contatti"
              size="lg"
              colorScheme="teal"
              variant="solid"
              textTransform="uppercase"
              rightIcon={<PhoneIcon />}
            >
              Contact Us
            </Button>
          </Flex>
        </Container>
      </Box>

      {/* ==================== APPROACH SECTION (GRAY.50) ==================== */}
      <Box as="section" bg="gray.50" py={{ base: 10, md: 16 }}>
        <Container maxW="1400px">
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={12}
            alignItems="center"
            justifyContent="center"
          >
            {/* Approach Text first */}
            <Box flex="1">
              <Heading as="h2" size="lg" mb={4}>
                Research Approach
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }}>
                Our multidisciplinary toolkit spans mouse genetics, genomics,
                biochemistry, cell biology, and human stem cells. By examining
                the interplay between microglia and neurons, we aim to uncover
                new paths to treat ALS. We also build novel experimental models
                that can shed light on the molecular underpinnings of
                neurodegeneration, ultimately driving progress toward effective
                therapies.
              </Text>
            </Box>

            {/* Approach Image second */}
            <Box flex="1.2" display="flex" justifyContent="center">
              <Image
                src="/foto/research_group.png"
                alt="Research Approach"
                w="100%"
                borderRadius="md"
                boxShadow="none"
              />
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Ricerca;
