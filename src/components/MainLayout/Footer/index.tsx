import NextLink from 'next/link'
import EmailIcon from '../../../assets/svg/EmilIcon'
import GitHubIcon from '../../../assets/svg/GitHubIcon'
import LinkedInIcon from '../../../assets/svg/LinkdInIcon'
import { yellow } from '../../../styles/basic-styles'
import * as Style from './style'

export default function Footer() {
  return (
    <>
      <Style.MainFooter>
        <Style.Footer>
          <Style.Icons>
            <a href="https://www.linkedin.com/in/victor160997/" target="_blank" rel="noreferrer">
              <LinkedInIcon color={yellow} />
            </a>
            <a href="https://github.com/victor160997" target="_blank" rel="noreferrer">
              <GitHubIcon color={yellow} />
            </a>
            <a href="mailto: victor.men.dev@gmail.com" target="_blank" rel="noreferrer">
              <EmailIcon color={yellow} />
            </a>
          </Style.Icons>
          <Style.Contents>
            <div>
              <NextLink href="/projects">Projects</NextLink>
              <p>project x</p>
              <p>project y</p>
              <p>project z</p>
            </div>
            <div>
              <NextLink href="/blog">Blog</NextLink>
              <p>Talking about TypeScript</p>
              <p>Why NextJs?</p>
              <p>The big market</p>
            </div>
            <div>
              <NextLink href="/">About me</NextLink>
              <p>Who I am?</p>
              <p>My best skills</p>
            </div>
          </Style.Contents>
        </Style.Footer>
      </Style.MainFooter>
      <Style.Rodape>
        <div>
          <p>- Made for Victor Mendonça - Full Stack developer</p>
        </div>
      </Style.Rodape>
    </>
  )
}
