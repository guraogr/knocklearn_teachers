import { extendTheme } from '@chakra-ui/react';
import { colors } from './colors';

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
  components: {
    Heading: {
      baseStyle: {},
      sizes: {
        sm: {
          fontSize: '1.125rem',
          fontWeight: 'normal',
        },
        md: {
          fontSize: '1.375rem',
          fontWeight: 'normal',
        },
        lg: {
          fontSize: '1.625rem',
          fontWeight: 'bold',
        },
        xl: {
          fontSize: '1.875rem',
          fontWeight: 'bold',
        },
      },
    },
  },
});
