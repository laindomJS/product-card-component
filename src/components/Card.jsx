import React from 'react';
import { Flex, Image, Box, Text, Heading, Button } from '@chakra-ui/react';
import imgSrc from '../images/image-product-desktop.jpg';
import imgMobile from '../images/image-product-mobile.jpg';
import btnIcon from '../images/icon-cart.svg';

export const Card = () => {
  return(
    <Flex as="article" bgColor="white" w={ {base:'350px', lg:'620px'} } borderTopRightRadius="8px" borderBottomRightRadius="8px" borderBottomLeftRadius={ {base:'8px', lg:'0'} } flexDir={ {base:'column', md:'row', lg:"row"} } h={ {base:'590px', lg:'fit-content'} }>
      
      <Image src={imgSrc} w={ {base:'100%', lg:'50%'} } h={ {base:'30%', lg:'100%'} } borderTopLeftRadius="8px" borderBottomLeftRadius={{base:'0', lg:'8px'}} borderTopRightRadius={ {base:'8px', lg:'0'} } alt="Photo of a perfume" />

      <Box as="section" p="2rem">
        <Text as="span" textTransform="uppercase" letterSpacing="4px" fontWeight="normal" color="brand.400">Perfume</Text>

        <Heading as="h1" mt=".5rem" fontWeight="bold" fontSize="30px">Gabrielle Essence Eau De Parfum</Heading>
        
        <Text as="p" fontSize="16px" mt=".6rem" fontWeight="medium" lineHeight="1.6" color="brand.400">A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfume-Creator for the House of CHANEL.</Text>

        <Flex w="fit-content" mt="1rem" alignItems="center">
          <Heading as="span" fontSize="35px" color="brand.100" mr="1rem">$149.99</Heading>
          <Text as="span" fontSize="15px" textDecor="line-through">$169.99</Text>
        </Flex>
      
        <Button mt="1rem" mx="auto" bgColor="brand.100" color="white" w="100%" h="45px" _hover={ {bgColor:'brand.300', transition:'.3s ease', cursor:'pointer'} }>
          <Image src={btnIcon} />
          <Text ml="1rem">Add to Card</Text>
        </Button>

      </Box>

    </Flex>
  )
}