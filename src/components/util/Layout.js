import React from 'react'
import customTheme from 'theme';
import GlobalCss from 'theme/components/GlobalCss';
import GuideLines from './Guidelines';
import { ChakraProvider } from '@chakra-ui/react'

export default function Layout({children}) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <GlobalCss />
      <GuideLines />

      <main>
        {children}
      </main>
    </ChakraProvider>
  )
}
