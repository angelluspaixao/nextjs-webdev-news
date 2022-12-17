import Head from 'next/head'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>WebDev News</title>
        <meta name='keywords' content='web deelopment, programing, next.js, nextjs' />
      </Head>
      <h1>Welcome to Netx.js</h1>
    </>
  )
}
