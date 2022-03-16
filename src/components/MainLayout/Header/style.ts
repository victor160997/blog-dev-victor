import styled from "styled-components"
import { darkBackground, gray1, gray2, white, yellow } from "../../../styles/basic-styles"

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
`
export const Content = styled.section`
  height: 100%;
  width: 1016px;
  display: flex;
  align-items: center;
`
export const Logo = styled.div`
  background: url('/dev-victor.png');
  background-size: cover;
  width: 130px;
  height: 53px;
`
export const Nav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 63px;
  span:nth-child(2), span:nth-child(3), span:nth-child(4) {
    margin-left: 32px;
  }
  span {
    width: 56px;
    height: 19px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: ${gray1};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75px;
    border: solid ${gray2} 3px;
    height: 107.9%;
    border-top: 0;
    border-right: 0;
    border-left: 0;
    border-radius: 3px;
  }
`