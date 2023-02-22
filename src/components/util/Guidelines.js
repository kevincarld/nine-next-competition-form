import React from 'react'
import {Grid, GridItem } from '@chakra-ui/react'

export default function GuideLines({opacity='.20'}) {
  if(!process.env.guidelines) return null

  return (
    <Grid
      templateColumns='repeat(12, 1fr)'
      gap='gutter'
      mx='auto'
      maxW='container.desktop'
      pos='fixed'
      inset='0 0 0 0'
      zIndex={123123}
      pointerEvents='none'
      opacity={opacity}
    >
      {Array(12).fill().map((_, i) => (
        <GridItem key={i} w='auto' bg='cyan'></GridItem>
      ))}
    </Grid>
  )
}