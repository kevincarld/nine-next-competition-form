import React from 'react'
//chakra
import { Box } from '@chakra-ui/react'

export default function Container({children, ...rest}) {
  return (
    <Box maxW={'container.desktop'} marginInline='auto' {...rest}>
      {children}
    </Box>
  )
}
