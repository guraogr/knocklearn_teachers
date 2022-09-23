import { extendTheme } from '@chakra-ui/react';
import { colors } from './colors';

export const theme = extendTheme({
  colors,
  fonts: {
    heading: `'Noto Sans JP', sans-serif`,
    body: `'Noto Sans JP', sans-serif`,
  },
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
          fontSize: '1.25rem',
          fontWeight: 'normal',
        },
        lg: {
          fontSize: '1.5rem',
          fontWeight: 'bold',
        },
        xl: {
          fontSize: '1.625rem',
          fontWeight: 'bold',
          lineHeight: '120%',
        },
        '2xl': {
          fontSize: ['1.75rem', '2rem'],
          lineHeight: '120%',
        },
      },
    },
  },
});
