import EmailIcon from '../../../assets/svg/EmilIcon'
import GitHubIcon from '../../../assets/svg/GitHubIcon'
import LinkedInIcon from '../../../assets/svg/LinkdInIcon'
import { yellow } from '../../../styles/basic-styles'
import * as Style from './style'

export default function Footer() {
  return (
    <Style.MainFooter>
      <Style.Footer>
        <Style.Icons>
          <LinkedInIcon color={yellow} />
          <EmailIcon color={yellow} />
          <GitHubIcon color={yellow} />
        </Style.Icons>
        <Style.Contents>
          <div>
            <h3>Projects</h3>
            <p>project x</p>
            <p>project y</p>
            <p>project z</p>
          </div>
          <div>
            <h3>Blog</h3>
            <p>Talking about TypeScript</p>
            <p>Why NextJs?</p>
            <p>The big market</p>
          </div>
          <div>
            <h3>About me</h3>
            <p>Who I am?</p>
            <p>My best skills</p>
          </div>
        </Style.Contents>
      </Style.Footer>
      <Style.Rodape>
        <div>
          <p>- Made for Victor Mendonça - Full Stack developer</p>
        </div>
      </Style.Rodape>
    </Style.MainFooter>
  )
}
