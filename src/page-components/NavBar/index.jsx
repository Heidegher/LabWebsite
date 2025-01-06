import React from "react";
import {
  Box,
  Flex,
  IconButton,
  HStack,
  Link as ChakraLink,
  Image,
  Text,
  VStack,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Research", to: "/research" },
  { label: "Team", to: "/team" },
  { label: "Papers", to: "/Papers" }, // or "Contacts"
];

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      w="100%"
      zIndex="1000"
      bgGradient="linear(to-r, teal.500, cyan.500)"
      boxShadow="lg"
    >
      {/* Top bar with logo + toggler + desktop nav */}
      <Flex
        alignItems="center"
        justifyContent="space-between"
        px={4}
        py={3}
        color="white"
      >
        {/* Logo + Brand (clickable link to Home) */}
        <HStack
          as={RouterLink}
          to="/"
          spacing={3}
          _hover={{ textDecoration: "none" }}
        >
          <Image
            src="/foto/Copertina_1.jpg"
            alt="Logo"
            w={10}
            h={10}
            borderRadius="full"
            border="2px solid"
            borderColor="white"
          />
          <Text
            fontWeight="bold"
            fontSize={{ base: "xl", md: "2xl" }} // bigger brand text
            letterSpacing="wider"
            whiteSpace="nowrap"
          >
            Research Lab
          </Text>
        </HStack>

        {/* Mobile Menu Toggler */}
        <IconButton
          display={{ base: "block", md: "none" }}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="outline"
          aria-label="Toggle Navigation"
          borderColor="whiteAlpha.700"
          color="white"
          _hover={{ bg: "whiteAlpha.200" }}
        />

        {/* Desktop Nav Links */}
        <HStack
          as="nav"
          spacing={6}
          display={{ base: "none", md: "flex" }}
          wrap="wrap" // allow items to wrap if they don't fit
        >
          {navLinks.map((link) => (
            <ChakraLink
              key={link.label}
              as={RouterLink}
              to={link.to}
              textTransform="uppercase"
              fontWeight="semibold"
              fontSize="lg" // bigger link text
              whiteSpace="nowrap" // keep each label on one line
              _hover={{
                textDecoration: "none",
                color: "yellow.200",
              }}
              _activeLink={{
                color: "yellow.300",
                fontWeight: "extrabold",
              }}
            >
              {link.label}
            </ChakraLink>
          ))}
        </HStack>
      </Flex>

      {/* Mobile Nav Links (Collapsible) */}
      <Collapse in={isOpen} animateOpacity>
        <VStack
          bgGradient="linear(to-r, teal.500, cyan.500)"
          display={{ md: "none" }}
          align="start"
          spacing={3}
          p={4}
        >
          {navLinks.map((link) => (
            <ChakraLink
              key={link.label}
              as={RouterLink}
              to={link.to}
              w="100%"
              px={3}
              py={2}
              borderRadius="md"
              fontWeight="semibold"
              fontSize="lg" // bigger text on mobile, too
              textTransform="uppercase"
              whiteSpace="nowrap" // do not split the word in half
              _hover={{ bg: "whiteAlpha.200", textDecoration: "none" }}
              _activeLink={{
                color: "yellow.300",
                fontWeight: "extrabold",
              }}
              onClick={onToggle} // closes mobile menu on link click
            >
              {link.label}
            </ChakraLink>
          ))}
        </VStack>
      </Collapse>
    </Box>
  );
};

export default Navbar;
