/* eslint-disable @next/next/no-img-element */
import { ButtonBanner } from '../../Buttons/ButtonBanner'
import * as Style from './styles'

export const Banner = () => (
  <Style.Teste>
    <div>
      <div>
        <span>Hey 👏 </span>
        <h1>Welcome to my</h1>
        <h1><span>Portfolio </span>&<span> Blog</span></h1>
        <h3>Victor Mendonça - Full Stack developer</h3>
        <section>
          <ButtonBanner text="Projects" path="/projects" />
          <ButtonBanner text="Blog" path="/blog" />
        </section>
      </div>
      <img src="/header.png" alt="interactive-office"></img>
    </div>
  </Style.Teste>
)