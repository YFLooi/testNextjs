import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

// To trigger render, visit:
// http://localhost:3000/posts/ssg-ssr
// http://localhost:3000/posts/pre-rendering
// All props for a component passed in as params
export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  )
}

export async function getStaticPaths() {
  // Contains the array of known paths returned by getAllPostIds(), which include 
  // the params defined by pages/posts/[id].js.
  const paths = getAllPostIds()

  return {
    paths,
    fallback: false
  }
}
// Gets the post data and return it as props.
export async function getStaticProps({ params }) {
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}