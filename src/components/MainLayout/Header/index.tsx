import * as Style from './style'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const { pathname } = useRouter()
  return (
    <Style.Header>
      <Style.Content>
        <Style.Logo />
        <Style.Nav router={pathname}>
          <NextLink href="/">Home</NextLink>
          <NextLink href="/projects">Projects</NextLink>
          <NextLink href="/blog">Blog</NextLink>
          <NextLink href="/contact">Contact</NextLink>
        </Style.Nav>
      </Style.Content>
    </Style.Header>
  )
}
