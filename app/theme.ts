// prettier-ignore
'use client'

import { ThemeConfig, theme as baseTheme, extendTheme } from '@chakra-ui/react'
import { StyleFunctionProps, mode, transparentize } from '@chakra-ui/theme-tools'

export const theme: Record<string, any> = extendTheme(
  {
    styles: {
      global: (props: StyleFunctionProps) => ({
        '*::-webkit-scrollbar': {
          display: 'none',
        },
        '*': {
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        },
      }),
    },
    config: {
      cssVarPrefix: 'ck',
      initialColorMode: 'dark',
      useSystemColorMode: false,
    } as ThemeConfig,
  },
  {
    components: {},
  },
)
