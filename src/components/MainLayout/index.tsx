import Head from "next/head"
import Footer from "./Footer"
import Header from "./Header"
import { FC, useEffect, useState } from "react"
import * as Style from './style'
import HeaderMobile from "./HeaderMobile"

const MainLayout: FC = ({ children }) => {
  return (
    <Style.MainContainer>
      <Header />
      <HeaderMobile />
      <Style.Content>
        {children}
      </Style.Content>
      <Footer />
    </Style.MainContainer>
  )
}

export default MainLayout
