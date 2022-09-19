import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyle } from '../styles/globals'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
}

export default MyApp
