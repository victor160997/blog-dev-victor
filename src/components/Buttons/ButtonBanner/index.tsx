import NextLink from 'next/link'
import * as Style from './styles'

export const ButtonBanner = ({ text, path }) => (

  // eslint-disable-next-line @next/next/link-passhref
  <NextLink href={path} >
    <Style.Button>
      <span>{text}</span>
    </Style.Button>
  </NextLink>
)