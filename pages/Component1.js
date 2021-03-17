import Head from "next/head"
import Link from "next/link"
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Component1() {

  //Inserting "home" here is a truthy switch for Layout to determine which style to use
  return( 
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Beep Beep I'm Component1</h1>
      <section className={utilStyles.headingMd}>
        <p>I have achieved singularity. Praise the Omnissiah</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}