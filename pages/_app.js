import Head from "next/head"
import "../styles/global.css"
import "../styles/styles.scss"
import { appWithTranslation } from "next-i18next";

const App = ({ Component, pageProps }) => {
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

// Implements translation for entire app
export default appWithTranslation(App)