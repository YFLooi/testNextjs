import Head from "next/head"
import "../styles/global.css"
import "../styles/styles.scss"

export default function App({ Component, pageProps }) {
  return (
    <>
      {/**Defining <head> here will be applied to all pages*/}
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  ) 
}
