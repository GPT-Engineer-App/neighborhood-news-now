import { Container, Box, Heading, Text, VStack, HStack, Image, IconButton, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const articles = [
  {
    id: 1,
    title: "Local Community Garden Flourishes",
    summary: "The community garden in downtown has seen a surge in participation and produce.",
    image: "https://images.unsplash.com/photo-1631195414013-85b70ff2c180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXJkZW58ZW58MHx8fHwxNzE2MTY4OTAxfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    title: "New Cafe Opens on Main Street",
    summary: "A new cafe offering organic coffee and pastries has opened its doors on Main Street.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYWZlfGVufDB8fHx8MTcxNjE2ODkwM3ww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    title: "High School Football Team Wins Championship",
    summary: "The local high school football team has won the state championship for the first time in 20 years.",
    image: "https://images.unsplash.com/photo-1598881034666-6d3443d4b1bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHRlYW18ZW58MHx8fHwxNzE2MTY4OTA0fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  return (
    <Container maxW="container.lg" py={8}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Local Newspaper
        </Heading>
        <HStack spacing={4}>
          <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" as={Link} href="https://facebook.com" isExternal />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" as={Link} href="https://twitter.com" isExternal />
          <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" as={Link} href="https://instagram.com" isExternal />
        </HStack>
        {articles.map((article) => (
          <Box key={article.id} borderWidth="1px" borderRadius="lg" overflow="hidden" w="100%">
            <Image src={article.image} alt={article.title} />
            <Box p={6}>
              <Heading as="h2" size="lg" mb={4}>
                {article.title}
              </Heading>
              <Text>{article.summary}</Text>
            </Box>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
