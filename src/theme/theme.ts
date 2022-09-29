import { extendTheme } from '@chakra-ui/react';
import { colors, semanticTokens } from './colors';
import { textStyles } from './textStyles';

export const theme = extendTheme({
  colors,
  semanticTokens: {
    colors: {
      ...semanticTokens,
    },
  },
  textStyles,
  fonts: {
    heading: `'Noto Sans JP', sans-serif`,
    body: `'Noto Sans JP', sans-serif`,
  },

  components: {
    Heading: {
      baseStyle: {},
      sizes: {
        title1: {
          textStyle: 'title1',
        },
        title2: {
          textStyle: 'title2',
        },
        title3: {
          textStyle: 'title3',
        },
        headline: {
          textStyle: 'headline',
        },
        subHeadline: {
          textStyle: 'subHeadline',
        },
      },
    },
  },
});
