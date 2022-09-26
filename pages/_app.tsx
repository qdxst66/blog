import '../styles/global.css'
import '../styles/page.css'
import Head from "next/head"
import type { AppProps } from 'next/app'
import Layout from '../common/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <Head>
    <title>blog123</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
  <Layout>
    <Component {...pageProps} />
  </Layout>
    </>
}

export default MyApp
