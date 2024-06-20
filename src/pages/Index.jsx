import { Container, Heading, Text, VStack, Box, Image, Link, Button } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4}>
        <Box boxSize="150px">
          <Image src="/images/profile.jpg" alt="Profile Picture" borderRadius="full" />
        </Box>
        <Heading as="h1" size="xl">Welcome to My Blog</Heading>
        <Text fontSize="lg" textAlign="center">
          Hi, I'm [Your Name], a passionate developer and tech enthusiast. Follow my journey as I explore the world of programming, technology, and more.
        </Text>
        <Button as={RouterLink} to="/add-post" colorScheme="teal" size="md">Add New Post</Button>
        <VStack spacing={4} align="stretch" width="100%">
          {posts.map((post, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">{post.title}</Heading>
              <Text mt={4}>{post.content}</Text>
              <Text mt={4} fontStyle="italic">- {post.author}</Text>
            </Box>
          ))}
        </VStack>
        <VStack spacing={2}>
          <Link href="https://twitter.com" isExternal>
            <FaTwitter size="24px" />
          </Link>
          <Link href="https://github.com" isExternal>
            <FaGithub size="24px" />
          </Link>
          <Link href="https://linkedin.com" isExternal>
            <FaLinkedin size="24px" />
          </Link>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;