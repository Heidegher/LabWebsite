import React from "react";
import { Box, Heading, Text, Button, Stack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { AttachmentIcon, InfoOutlineIcon } from "@chakra-ui/icons";

const HomePage = () => {
  return (
    <Box
      position="relative"
      w="100%"
      h="100vh"
      bgImage="url('/foto/HOME1 microglia.jpg')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      {/* Dark overlay to improve text readability */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bg="rgba(0, 0, 0, 0.4)"
      />

      {/* Main content */}
      <Box
        position="relative"
        zIndex={1}
        w="100%"
        h="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        p={4}
        gap={{ base: 5, md: 8, lg: 10 }}
      >
        <Heading
          color="white"
          textAlign="center"
          textShadow="2px 2px 8px rgba(0,0,0,0.7)"
          fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
          px={4}
        >
          Biology of Neurodegeneration Laboratory
        </Heading>

        <Text
          color="white"
          textAlign="center"
          textShadow="1px 1px 5px rgba(0,0,0,0.7)"
          fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}
          maxW={{ base: "90%", md: "70%", lg: "60%" }}
        >
          The Gerbino Lab explores how motor neurons and glial cells
          communicate, seeking to unravel their role in neurodegenerative
          disease progression. We investigate the cellular and molecular
          mechanisms underlying neurodegeneration, striving to identify novel
          therapeutic strategies.
        </Text>

        <Text
          color="white"
          textAlign="center"
          textShadow="1px 1px 5px rgba(0,0,0,0.7)"
          fontStyle="italic"
          fontSize={{ base: "md", md: "xl", lg: "2xl" }}
          maxW={{ base: "90%", md: "70%", lg: "60%" }}
        >
          “The important thing is not to stop questioning. Curiosity has its own
          reason for existing.” – Albert Einstein
        </Text>

        {/* CTA Buttons in a Stack so they can stack on mobile, and center on desktop */}
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 4, md: 8 }}
          mt={{ base: 10, md: 12 }} // more space between text and buttons
          alignItems="center"
          justifyContent="center" // center buttons horizontally on desktop
          w="full"
          maxW={{ base: "90%", md: "80%", lg: "60%" }}
        >
          <Button
            as={RouterLink}
            to="/papers"
            size="lg"
            fontWeight="bold"
            textTransform="uppercase"
            bgGradient="linear(to-r, teal.400, cyan.500)"
            color="white"
            rightIcon={<AttachmentIcon boxSize={5} />}
            px={{ base: 6, md: 8 }}
            py={{ base: 5, md: 6 }}
            transition="all 0.3s ease"
            _hover={{
              bgGradient: "linear(to-r, teal.500, cyan.600)",
              transform: "scale(1.05)",
              textDecoration: "none",
            }}
            _active={{
              transform: "scale(0.98)",
            }}
            w={{ base: "full", md: "auto" }}
          >
            View Papers
          </Button>

          <Button
            as={RouterLink}
            to="/team"
            size="lg"
            fontWeight="bold"
            textTransform="uppercase"
            bgGradient="linear(to-r, purple.500, pink.500)"
            color="white"
            rightIcon={<InfoOutlineIcon boxSize={5} />}
            px={{ base: 6, md: 8 }}
            py={{ base: 5, md: 6 }}
            transition="all 0.3s ease"
            _hover={{
              bgGradient: "linear(to-r, purple.600, pink.600)",
              transform: "scale(1.05)",
              textDecoration: "none",
            }}
            _active={{
              transform: "scale(0.98)",
            }}
            w={{ base: "full", md: "auto" }}
          >
            Meet the Team
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default HomePage;
