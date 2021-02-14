import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout'
import Hero from '../components/Hero';
import Foods from '../components/Foods'
import Delivery from '../components/Delivery'
import Offer from '../components/Offer';
import Blog from '../components/Blog'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shadman Shakib E-commerce App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <Hero/>
      <Foods/>
      <Delivery/>
      <Offer/>
      <Blog/>
      </Layout>
      
    </div>
  )
}
