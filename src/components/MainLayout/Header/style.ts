import styled from "styled-components"
import { darkBackground, gray1, gray2, white, yellow, yellow07, tablet, mobile } from "../../../styles/basic-styles"

interface NavProps {
  router: string
}

export const Header = styled.header`
  /* background-color: pink; */
  background-color: ${darkBackground};
  width: 100%;
  height: 80px;
  position: fixed;
  border: solid ${gray2} 3px;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile} {
    display: none;
  }
`
export const Content = styled.section`
  height: 100%;
  width: 1016px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* background-color: red; */
  ${tablet} {
    width: 768px;
  }
`
export const Logo = styled.div`
  background: url('/dev-victor.png');
  background-size: cover;
  width: 130px;
  height: 53px;
`
export const Nav = styled.nav<NavProps>`
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 63px;
  a:nth-child(1) {
    border-color: ${({ router }) => router === '/' ? `${yellow}` : `${gray2}`};
    color: ${({ router }) => router === '/' ? `${white}` : `${gray1}`};
  }

  a:nth-child(2) {
    margin-left: 32px;
    border-color: ${({ router }) => router === '/projects' ? `${yellow}` : `${gray2}`};
    color: ${({ router }) => router === '/projects' ? `${white}` : `${gray1}`};
  }

  a:nth-child(3) {
    margin-left: 32px;
    border-color: ${({ router }) => router === '/blog' ? `${yellow}` : `${gray2}`};
    color: ${({ router }) => router === '/blog' ? `${white}` : `${gray1}`};
  }

  a:nth-child(4){
    margin-left: 32px;
    border-color: ${({ router }) => router === '/contact' ? `${yellow}` : `${gray2}`};
    color: ${({ router }) => router === '/contact' ? `${white}` : `${gray1}`};
  }

  a {
    transition: all ease 0.25s;
    width: 56px;
    height: 19px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75px;
    border: solid ${yellow} 3px;
    height: 107.9%;
    border-top: 0;
    border-right: 0;
    border-left: 0;
    border-radius: 3px;
    :hover {
      transition: all ease 0.25s;
      color: ${white};
    }
  }
`