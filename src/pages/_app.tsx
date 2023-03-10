import '@/styles/globals.css'
import '@/styles/components.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <Head>
      <title>My First Site</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
  )
}
