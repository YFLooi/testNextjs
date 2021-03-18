import Link from "next/link"
import Layout, { siteTitle } from '../components/layout'


export default function Component2() {

  //Inserting "home" here is a truthy switch for Layout to determine which style to use
  return( 
    <>
      <h1>Beep Beep I'm Component2</h1>
      <section className="component2__section1">
        <p className="component2__paragraph1">I have achieved singularity. Praise the Omnissiah</p>
        <p className="component2__paragraph2">
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </>
  )
}