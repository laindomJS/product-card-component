import './App.css';
import { Box, Text } from '@chakra-ui/react';
import { Card } from './components/Card';

function App() {

  return (
    <Box bgColor="brand.200" display="flex" justifyContent="center" alignItems="center" p="2rem" w="100%" h="100vh">
      <Card />
    <Text></Text>
    </Box>
  )
}

export default App
