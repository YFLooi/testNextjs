import Link from "next/link"
import Image from "next/image"
import Layout from "../../components/layout"
import "../styles.component2.scss"

export default function SubComponent1() {
  return( 
    <Layout>
      <div className="container">
        <h1>Beep Beep I'm SubComponent1</h1>
        <Link href="/" className="card">
          <a className="card"><h3>Nav to index.js &rarr;</h3></a>
        </Link>
        <Image
          src="/images/handsomeMonke.jpeg" // Route of the image file IN "public"
          height={144} // Desired size with correct aspect ratio 
          width={144} // Desired size with correct aspect ratio 
          alt="Your Name" 
        />
      </div>
    </Layout>
  )
}


