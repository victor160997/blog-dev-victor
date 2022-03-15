import Head from "next/head"
import Footer from "./Footer";
import Header from "./Header";
import * as Style from "./style"

export default function MainLayout({ children }) {
  return (
    <Style.MainContainer>
      <Header />
      <Style.Content>
        {children}
      </Style.Content>
      <Footer />
    </Style.MainContainer>
  )
}
