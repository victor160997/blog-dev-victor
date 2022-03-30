import { createClient } from '../../../prismicio'

export const getPosts = async (previewData: any) => {
  const client = createClient({ previewData })

  const page:any = await client.getByUID('post', 'teste-1')
  const posts = page.data.slices.map((s: any) => ({
    title: s.primary.title[0].text,
    subtitle: s.primary.Subtitle[0].text,
    post: s.primary.description.map((paragraph: any) => paragraph.text),
  }))
  const info = {
    posts,
  }

  return info
}