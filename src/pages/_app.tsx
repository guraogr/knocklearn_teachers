import '@fontsource/noto-sans-jp/400.css';
import '@fontsource/noto-sans-jp/500.css';
import '@fontsource/noto-sans-jp/700.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { theme } from '../theme/theme';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
        <Component key={router.asPath} {...pageProps} />
      </AnimatePresence>
    </ChakraProvider>
  );
}

export default MyApp;
