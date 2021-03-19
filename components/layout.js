// To use the CSS "container" class defined in layout.module.css 
// inside components/layout.js, you need to:
//     Import the CSS file and assign a name to it, like styles
//     Use styles.container as the className
import styles from "./layout.module.css"

import Head from 'next/head'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Your Name'
export const siteTitle = 'Next.js Sample Website'

// export default function Layout({ children }) {
//   //className is assigned the style module
//   return <div className={styles.container}>{children}</div>
// }

/**
 * Reuseable head of our blog app
 * @param {*} param0 
 * "home" used to trigger conditions that adjust size of title and image
 * "children" refers to the return() content of the component wrapped by Layout
 */
export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/**meta tags here describe page content*/}
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/**If-Else to decide which to render
       *  To trigger, use <Layout home> for truthy and <Layout> for falsy
      */}
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/handsomeMonke.jpeg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/handsomeMonke.jpeg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {/**Renders if "home" is falsy*/}
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
