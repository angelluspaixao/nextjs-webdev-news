import Head from 'next/head'
import ArticleList from '../components/ArticleList'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const getStaticProps = async () => {
  const res = await fetch(`https:jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}

export default function Home({ articles }) {
  return (
    <>
      <title>WebDev News</title>
      <meta name='keywords' content='web devlopment, programing, next.js, nextjs' />
      <ArticleList articles={articles}/>
    </>
  )
}
