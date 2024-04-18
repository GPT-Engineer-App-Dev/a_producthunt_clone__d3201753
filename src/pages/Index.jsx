import { Box, Flex, Text, Button, Input, VStack, HStack, Image, useColorMode, useColorModeValue, IconButton, Tooltip } from "@chakra-ui/react";
import { FaSun, FaMoon, FaSearch, FaHeart, FaPlus } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const color = useColorModeValue("gray.800", "gray.50");

  return (
    <Box bg={bgColor} color={color} minH="100vh">
      <Flex p={4} justifyContent="space-between" alignItems="center">
        <Text fontSize="2xl" fontWeight="bold">
          ProductHunt
        </Text>
        <HStack spacing={4}>
          <Tooltip label="Search products">
            <Button leftIcon={<FaSearch />} variant="outline">
              Search
            </Button>
          </Tooltip>
          <Tooltip label={colorMode === "light" ? "Dark mode" : "Light mode"}>
            <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} variant="outline" />
          </Tooltip>
        </HStack>
      </Flex>
      <VStack spacing={8} p={8}>
        <Product title="Chakra UI" description="Simple, Modular and Accessible UI Components for your React Applications." imageUrl="https://images.unsplash.com/photo-1531403009284-440f080d1e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaGFrcmElMjB1aXxlbnwwfHx8fDE3MTM0MTkzNTR8MA&ixlib=rb-4.0.3&q=80&w=1080" />
        <Product title="React Icons" description="Include popular icons in your React projects easily with react-icons." imageUrl="https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMGljb25zfGVufDB8fHx8MTcxMzQxOTM1NHww&ixlib=rb-4.0.3&q=80&w=1080" />
      </VStack>
      <Flex justifyContent="center" p={4}>
        <Button leftIcon={<FaPlus />} colorScheme="pink" variant="solid">
          Add Product
        </Button>
      </Flex>
    </Box>
  );
};

const Product = ({ title, description, imageUrl }) => {
  return (
    <Flex bg="white" boxShadow="md" borderRadius="lg" p={4} alignItems="center" width="full">
      <Image src={imageUrl} boxSize="100px" borderRadius="md" mr={4} />
      <VStack align="start" spacing={1} flex="1">
        <Text fontWeight="bold" fontSize="lg">
          {title}
        </Text>
        <Text fontSize="sm">{description}</Text>
      </VStack>
      <Button variant="ghost" colorScheme="red">
        <FaHeart />
      </Button>
    </Flex>
  );
};

export default Index;
