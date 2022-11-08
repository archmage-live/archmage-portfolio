// prettier-ignore
'use client'

import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'

import { theme } from './theme'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      {children}
    </ChakraProvider>
  )
}
