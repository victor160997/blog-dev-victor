import styled from "styled-components"
import { desktopEtablet, gray1, gray2, mobile, tablet, white, yellow } from "../../../styles/basic-styles"

export const All = styled.section`
  display: flex;
  flex-direction: column;
`

export const MainFooter = styled.footer`
  border-top: solid ${gray2} 3px;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Rodape = styled.div`
  border-top: solid ${gray2} 3px;
  width: 100%;
  display: flex;
  justify-content: center;
  div {
    width: 1016px;
    p {
      color: ${gray1};
      margin-bottom: 5px;
      font-family: roboto;
      font-weight: 400;
      transition: all ease 0.25s;
      margin: 15px 0;
    }
  }
  ${tablet} {
    div {
      width: 768px;
      margin-left: 10px;
    }
  }
`

export const Footer = styled.footer`
  width: 1016px;
  display: flex;
  flex-direction: column;
  ${tablet} {
    width: 768px;
  }
`
export const Contents = styled.div`
  display: flex;
  margin-bottom: 20px;
  div {
    margin-right: 60px;
    a {
      color: ${yellow};
      font-family: roboto;
      font-weight: 900;
      transition: all ease 0.25s;
      :hover {
        transition: all ease 0.25s;
        text-decoration: underline;
      }
    }
    p {
      color: ${gray1};
      margin-bottom: 5px;
      font-family: roboto;
      font-weight: 400;
      transition: all ease 0.25s;
      :hover {
        color: white;
      }
    }
    p:nth-child(2) {
      margin-top: 15px;
    }
  }
  ${tablet} {
    margin-left: 10px;
  }
  ${mobile} {
    flex-direction: column;
    div {
      margin-bottom: 20px;
      a {
        font-size: 30px;
      }
      p {
        font-size: 20px;
      }
    }
  }
`
export const Icons = styled.div`
  display: flex;
  margin-top: 20px;
  svg {
    width: 40px;
    margin-bottom: 20px;
    margin-right: 65px;
    transition: all ease 0.25s;
    :hover {
      transform: scale(1.2);
    }
  }
  ${tablet} {
    margin-left: 10px;
  }
`
