import { useState } from 'react'
import NextLink from 'next/link'
import * as Style from './style'

export default function HeaderMobile () {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Style.Header open={open}>
        <Style.Logo />
        <section onClick={() => setOpen(!open)}>
          <Style.First open={open} />
          <Style.Second open={open} />
          <Style.Third open={open}>
            <div></div>
          </Style.Third>
        </section>
      </Style.Header>
      <Style.Menu open={open}>
        <NextLink href='/'>Home</NextLink>
        <NextLink href='/projects'>Projects</NextLink>
        <NextLink href='/blog'>Blog</NextLink>
        <NextLink href='/contact'>Contact</NextLink>
      </Style.Menu>
    </>
  )
}