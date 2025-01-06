// src/page-components/News/Timeline.jsx
import React from "react";
import {
  Box,
  Container,
  Flex,
  Text,
  Image as ChakraImage,
  VStack,
  HStack,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { teamMembers } from "./teamMembers";
import { newsItems } from "./news";

const TimelineItem = ({ date, description, members }) => {
  const lineColor = useColorModeValue("teal.500", "teal.300");
  const textColor = useColorModeValue("gray.700", "gray.200");
  const dateColor = useColorModeValue("teal.500", "teal.300");

  return (
    <Flex
      position="relative"
      width="full"
      justify={{ base: "center", md: "flex-start" }}
    >
      <Box
        position="absolute"
        top="0"
        left={{ base: "50%", md: "35px" }}
        bottom="0"
        width={{ base: "0px", md: "4px" }}
        bg={lineColor}
        transform={{ base: "translateX(-50%)", md: "none" }}
      />

      <Box
        borderWidth="2px"
        borderColor="teal.500"
        borderRadius="md"
        p={4}
        bg={useColorModeValue("gray.50", "gray.700")}
        ml={{ base: "0px", md: "50px" }}
        mb={8}
        width={{ base: "90%", md: "80%" }}
        alignSelf={{ base: "center", md: "flex-start" }}
        textAlign={{ base: "center", md: "left" }}
      >
        <HStack
          align={{ base: "center", md: "start" }}
          spacing={6}
          flexDirection={{ base: "column", md: "row" }}
        >
          {members.length > 0 ? (
            <Stack
              direction={{ base: "column", md: "column" }}
              spacing={2}
              display={{ base: "none", md: "flex" }}
            >
              {members.map((memberId) => {
                const member = teamMembers.find((m) => m.id === memberId);
                return (
                  <ChakraImage
                    key={memberId}
                    src={member.image}
                    alt={member.name}
                    boxSize="40px"
                    borderRadius="full"
                    border="2px solid"
                    borderColor="teal.500"
                    objectFit="cover"
                    fallbackSrc="/foto/tbk1.png"
                    loading="lazy"
                  />
                );
              })}
            </Stack>
          ) : (
            <Box
              boxSize="40px"
              borderRadius="full"
              bg="teal.500"
              border="2px solid"
              borderColor={lineColor}
              display={{ base: "none", md: "block" }}
            />
          )}

          <Box>
            <Text fontWeight="bold" color={dateColor}>
              {date}
            </Text>
            <Text mt={1} color={textColor}>
              {description}
            </Text>
          </Box>
        </HStack>
      </Box>
    </Flex>
  );
};

const Timeline = () => {
  return (
    <Box
      w="100%"
      minH="100vh"
      bg={useColorModeValue("white", "gray.800")}
      py={10}
      overflowY="auto"
    >
      <Container maxW="container.lg">
        <VStack align="stretch" spacing={8}>
          {newsItems.map((item, index) => (
            <TimelineItem
              key={index}
              date={item.date}
              description={item.description}
              members={item.members}
            />
          ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default Timeline;
