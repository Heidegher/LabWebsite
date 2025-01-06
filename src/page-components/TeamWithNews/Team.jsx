// src/page-components/News/Team.jsx
import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Flex,
  Image as ChakraImage,
  Button,
} from "@chakra-ui/react";
import { AttachmentIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const teamMembers = [
  {
    name: "Valeria Gerbino",
    role: "Lab Head",
    image: "/foto/valeria_gerbino.jpg",
    descrizione:
      "I did my undergraduate and graduate studies at the University of Rome Tor Vergata (Italy). I carried out my PhD studies in the lab of Professor Maria Teresa Carrì in Rome, where I started to investigate molecular mechanisms underlying Amyotrophic Lateral Sclerosis. In particular, at that time, I was interested in how ALS-associated mutations in the FUS/TLS gene cause problems to the splicing machinery. For my post-doctoral studies, I joined the lab of Tom Maniatis at Columbia University, where I pursued the role of TBK1, a protein involved in autophagy and immunity, in ALS. After 8 years at Columbia University, I moved back to Rome to establish my own independent research lab at the Fondazione Santa Lucia. In my free time I enjoy aerial dance: you can easily find me hanging on aerial silks or aerial hoops in the studio when I am not in the lab.",
  },
  {
    name: "Olga Carletta",
    role: "PhD Student",
    image: "/foto/olga_carletta.jpg",
    descrizione:
      "My name is Olga Carletta and I am 29 years old. I graduated in Neurobiology at the University of Pavia (Italy). I joined the Gerbino Lab at the beginning of 2023 and since 2024 I am also enrolled in the PhD course in Biomedical Sciences and Technologies at the University of Rome “Roma Tre”. I've always been interested in science from when I was a kid and saw Rita Levi Montalcini on TV. During university I developed a special interest in the study of neurodegeneration diseases. In my free time I like to draw and go to cultural events.",
  },
  {
    name: "Camilla Perfetto",
    role: "Research Fellow",
    image: "/foto/camilla_perfetto.jpg",
    descrizione:
      "My name is Camilla Perfetto and I graduated in Genetics and Molecular Biology at the University of Rome La Sapienza (Italy) in 2024. I have always had a deep interest in science, a passion that has guided me throughout my academic journey. During my master's thesis, I had the opportunity to approach the field of neuroscience, an area that fascinated me to the point of pursuing it further as my professional direction. In addition to science, I have many other passions that enrich my daily life. I love sports and I enthusiastically follow various TV series, which I consider an enjoyable way to unwind and be entertained.",
  },
  {
    name: "Francesca Manganelli",
    role: "PhD Student",
    image: "/foto/francesca_manganelli.jpg",
    descrizione:
      "My name is Francesca Manganelli, and I graduated in Molecular Biology and Genetics at the University of Pavia (Italy). Since I was a child, I had a strong tendency to curiosity and a desire for understanding life itself, which drove me to pursue a career path in science. The study of the brain has always interested me. Soon after my Master’s Thesis, I moved to Paris (France) to join the ICM (Institute for brain and spinal cord studies), where I was introduced to the world of neurodegenerative diseases. I soon decided that I wanted to continue my studies into the functioning of the brain at the cellular level. Thus, I moved to Rome to join the Gerbino Lab and work on ALS. Since 2025 I am also a PhD student in the PhD Program in Cellular and Molecular Biology at the University of Rome Tor Vergata. ",
  },
];

const Team = () => {
  return (
    <Box w="100%" minH="100vh" bg="white">
      {/* ===== Banner / Hero Section ===== */}
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
            Meet the Team
          </Heading>
          <Text
            fontSize={{ base: "xl", md: "3xl" }}
            maxW="600px"
            mx="auto"
            mb={6}
          >
            Discover the dedicated scientists and researchers pushing the
            frontiers of knowledge every day.
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
        </Container>
      </Box>

      {/* ===== Team Cards ===== */}
      <Container maxW="container.xl" pb={16}>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={4}
          justifyItems="center"
        >
          {teamMembers.map((member, index) => (
            <Flex
              key={index}
              direction="column"
              w="full"
              bg="gray.200"
              borderWidth={1}
              borderColor="gray.400"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              transition="all 0.3s ease"
            >
              {/* Image Section */}
              <Flex align="center" justify="center" bg="white" h="300px">
                <ChakraImage
                  src={member.image}
                  alt={member.name}
                  objectFit="contain"
                  maxH="100%"
                  w="100%"
                  loading="lazy"
                  fallbackSrc="/foto/placeholder.png"
                />
              </Flex>

              {/* Text Section */}
              <Flex
                direction="column"
                p={6}
                align="flex-start"
                justify="center"
                textAlign="left"
              >
                <Heading as="h2" size="md" mb={2} color="gray.800">
                  {member.name}
                </Heading>
                <Text
                  fontWeight="semibold"
                  color="gray.600"
                  mb={3}
                  textTransform="uppercase"
                  fontSize="md" // Increased font size
                >
                  {member.role}
                </Text>
                <Text color="gray.700" fontSize="lg">
                  {" "}
                  {member.descrizione}
                </Text>
              </Flex>
            </Flex>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Team;
