import React from 'react'
import { Text } from '@chakra-ui/react'
import NineLink from './NineLink'
import Container from './util/Container'

export default function Terms() {
  return (
    <Container maxW='750px' mt="40px">
      <Text {...texts.terms}>
        T&Cs apply, see <NineLink href="3">sample-link.com.au</NineLink>. AU res. 18+. Ends 15/11/22. Limit 1 entry per room reveal. NSW TP/01749; ACT TP22/01234; SA T22/985. Link to Full T&C’s. Promoter is Nine Entertainment Co. Pty Ltd of 1 Denison Street, North Sydney NSW 2060 Link to Nine’s privacy policy.
      </Text>
    </Container>
  )
}

const texts = {
  terms: {
    textAlign: 'center',
    fontSize: '10px'
  }
}
