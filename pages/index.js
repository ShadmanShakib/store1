import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout'
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shadman Shakib E-commerce App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <Hero/>
      </Layout>
      
    </div>
  )
}
