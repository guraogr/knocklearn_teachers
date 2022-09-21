import { extendTheme } from '@chakra-ui/react'
import { colors } from './colors'

export const theme = extendTheme({
  colors,
  fonts: {
    heading: `'Noto Sans JP', sans-serif`,
    body: `'Noto Sans JP', sans-serif`,
  },
  // fontSizes: {
  //   "4xl": "3rem",
  // },
  textStyles: {
    h1: {
      fontSize: ['28px', '32px'],
      fontWeight: 'bold',
      lineHeight: '120%',
    },
  },
})
