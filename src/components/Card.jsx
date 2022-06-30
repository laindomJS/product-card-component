import React from 'react';
import { Flex, Image, Box, Text, Heading, Button } from '@chakra-ui/react';
import imgSrc from '../images/image-product-desktop.jpg';
import btnIcon from '../images/icon-cart.svg';

export const Card = () => {
  return(
    <Flex as="article" bgColor="white" w="620px" borderTopRightRadius="8px" borderBottomRightRadius="8px">
      
      <Image src={imgSrc} w="50%" h="100%" borderTopLeftRadius="8px" borderBottomLeftRadius="8px" />

      <Box as="section" p="2rem">
        <Text as="span" textTransform="uppercase" letterSpacing="4px" fontWeight="normal" mb="1rem" color="brand.400">Perfume</Text>

        <Heading as="h1" mt="1rem" fontWeight="bold" fontSize="30px">Gabrielle Essence Eau De Parfum</Heading>
        
        <Text as="p" fontSize="16px" mt="1rem" fontWeight="medium" lineHeight="1.6" color="brand.400">A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfume-Creator for the House of CHANEL.</Text>

        <Flex w="fit-content" mt="1.5rem" alignItems="center">
          <Heading as="span" fontSize="35px" color="brand.100" mr="1rem">$149.99</Heading>
          <Text as="span" fontSize="15px" textDecor="line-through">$169.99</Text>
        </Flex>
      
        <Button mt="1.2rem" mx="auto" bgColor="brand.100" color="white" w="100%" h="45px" _hover={ {bgColor:'brand.300', transition:'.3s ease', cursor:'pointer'} }>
          <Image src={btnIcon} />
          <Text ml="1rem">Add to Card</Text>
        </Button>

      </Box>

    </Flex>
  )
}