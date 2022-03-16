import * as Style from './style'

export default function Header() {
  return (
    <Style.Header>
      <Style.Content>
        <Style.Logo />
        <Style.Nav>
          <span>Home</span>
          <span>Projects</span>
          <span>Blog</span>
          <span>Contact</span>
        </Style.Nav>
      </Style.Content>
    </Style.Header>
  )
}
