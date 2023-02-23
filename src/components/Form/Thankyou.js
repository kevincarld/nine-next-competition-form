import React from 'react'
import { Box, Text, Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'
import Container from 'components/util/Container'

export default function Thankyou() {

  return (
    <Container py='50px' textAlign='center'>
      <Alert
        status='success'
        variant='subtle'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        p='60px 20px 60px'
        maxW='750px'
        mx='auto'
      >
        <AlertIcon boxSize='40px' mr={0} />
        <AlertTitle mt={4} mb={2} fontSize='lg'>
          Application submitted!
        </AlertTitle>
        <AlertDescription maxWidth='sm'>
          This is a sample description message. Thanks for submitting your application. Our team will get back to you soon.
        </AlertDescription>
      </Alert>
    </Container>
  )
}

// font styles
const texts = {
  xx: {

  }
}

