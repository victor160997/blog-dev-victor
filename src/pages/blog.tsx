import MainLayout from "../components/MainLayout";
import { getPosts } from '../services/apiprismic'


export async function getStaticProps({ _params, previewData }) {
  const posts = await getPosts(previewData)

  return {
    props: { posts },
    revalidate: 600,
  }
}

export default function blog({ posts }) {
  return (
    <MainLayout>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
      <h1>BLOG</h1>
    </MainLayout>
  )
}
