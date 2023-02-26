import React from 'react'
import { Link } from '@chakra-ui/react'

export default function NineLink({children, ...rest}) {
  return (
    <Link target={'_blank'} rel="sponsored" color='link' _hover={{ textDecor: 'underline' }} {...rest}>
      {children}
    </Link>
  )
}
