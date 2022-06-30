import './App.css';
import { Box, Text, Link } from '@chakra-ui/react';
import { Card } from './components/Card';

function App() {

  return (
    <Box bgColor="brand.200" display="flex" justifyContent="center" alignItems="center" flexDir="column" p="2rem" w="100%" h="100vh">
      <Card />
    <Text mt="1rem" fontSize="13px">
      Challenge by <Link href="https://www.frontendmentor.io/challenges" target="_blank" textDecoration="underline">FrontendMentor.</Link> 
      Coded by <Link href="https://www.frontendmentor.io/profile/laindomJS" target="_blank" textDecoration="underline">LainJS</Link> 
    </Text>
    </Box>
  )
}

export default App
