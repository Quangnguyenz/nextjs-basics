import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>A Nextjs app</title>
        <meta name="description" content="A next Js page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Home</h1>
      <p>This is the home page</p>
    </div>
  )
}
