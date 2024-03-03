'use client'

import { ChakraProvider } from '@chakra-ui/react';
import { MockProvider } from './mockProvider';

export function Providers({ children }: {children: React.ReactNode}) {
  return (
    <ChakraProvider>
      <MockProvider>
        {children}
      </MockProvider>
    </ChakraProvider>
  )
}