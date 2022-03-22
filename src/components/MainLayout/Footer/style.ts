import styled from "styled-components"
import { desktopEtablet, gray1, gray2, mobile, white, yellow } from "../../../styles/basic-styles"

export const MainFooter = styled.footer`
  border-top: solid ${gray2} 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const Rodape = styled.div`
  /* width: 100vw; */
  width: 100%;
  height: 50px;
  border-top: solid ${gray2} 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  div {
    width: 1016px;
    p {
      color: white;
      font-family: roboto;
      font-weight: 400;
      font-size: 13px;
    }
  }
`

export const Footer = styled.footer`
  width: 1016px;
  height: fit-content;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  margin-top: 20px;

  ${mobile} {
    padding: 10px 0 10px 10px;
    display: flex;
  }
`
export const Contents = styled.div`
  margin-left: 30px;
  width: 500px;
  ${desktopEtablet} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  div {
    margin-bottom: 15px;
    h3 {
      color: ${yellow};
      font-family: roboto;
      margin-bottom: 5px;
    }
    p {
      color: ${gray1};
      font-family: roboto;
      font-weight: 400;
      margin-bottom: 3px;
    }
  }
`
export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  svg {
    width: 35px;
    margin-bottom: 80%;
  }
`
