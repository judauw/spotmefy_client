import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Button from '../components/Button'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SpotMeFy</title>
        <meta name="description" content="A new way to explore your Spotify history" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to SpotMeFy
        </h1>

        <p className={styles.grid}>
         <Button onPress={() => alert('Button pressed!')}>Test button</Button>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
