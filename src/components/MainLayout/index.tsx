import Head from "next/head"
import Footer from "./Footer";
import Header from "./Header";
import { FC } from "react"

import styled from "styled-components"

export const MainContainer = styled.main`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Content = styled.section`
  /* background-color: blue; */
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1016px;
`

const MainLayout: FC = ({ children }) => {
  return (
    <MainContainer>
      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
    </MainContainer>
  )
}

export default MainLayout
