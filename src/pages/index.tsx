import React from 'react';
import { ChakraProvider, Heading } from '@chakra-ui/react'

import { theme } from '../../styles/theme'

import { Header } from '../components/Header'

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
    </ChakraProvider>
  )
}
