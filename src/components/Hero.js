import React from 'react'
import {
  Button,
  Flex,
  Box,
  VStack,
  Stack,
  Text,
} from '@chakra-ui/react';
import { mock } from 'utils/common';
import Container from './util/Container';

export default function Hero() {
  const handleClickScroll = (e) => {
    e.preventDefault()
    const element = document.getElementById('intro');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <Container>
        <Flex
        mx='auto'
        w={'full'}
        h={'600px'}
        backgroundImage={mock('1024x600', 'Hero Image', 'red')}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
      >

        <VStack
          justify={'center'}
          px={{ base: 5, lg: '120px' }}
          >

          <Stack maxW={'600px'} align={'flex-start'} spacing={6} mr='auto'>
            <Box>
              <Text
                as='span'
                color={'white'}
                lineHeight={2}
                fontSize={{ base: 'md' }}>
                Lorem ipsum dolor sit amet consectetur
              </Text>
              <Text
                color={'white'}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={{ base: '3xl', md: '4xl' }}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor
              </Text>
            </Box>

            <Button onClick={handleClickScroll}>
              Enter
            </Button>

          </Stack>
        </VStack>
      </Flex>
    </Container>
  )
}


