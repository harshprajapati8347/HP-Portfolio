import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import theme from 'config/theme'
import FavIconProvider from 'components/Misc/FavIconProvider'
import { GoogleTagManager } from '@next/third-parties/google'

function HPSite({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AnimatePresence exitBeforeEnter>
      <ChakraProvider theme={theme}>
        <GoogleTagManager gtmId="GTM-WVR8KDZ" />
        <FavIconProvider>
          <Component {...pageProps} />
        </FavIconProvider>
      </ChakraProvider>
    </AnimatePresence>
  )
}
export default HPSite
