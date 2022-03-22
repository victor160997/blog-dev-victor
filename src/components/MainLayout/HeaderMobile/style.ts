import styled from "styled-components"
import { darkBackground, desktopEtablet, gray1, gray2, mobile, white, yellow, yellow07 } from "../../../styles/basic-styles"

interface MenuProps {
  open: boolean
}

export const Header = styled.header<MenuProps>`
  ${desktopEtablet} {
    display: none;
  }
  ${mobile} {
    transition: all ease 0.5s;
    position: fixed;
    width: 100%;
    height: 80px;
    border-bottom: solid ${gray2} 3px;
    background-color: ${darkBackground};
    display: flex;
    justify-content: space-between;
    align-items: center;
    section {
      transition: all ease 0.5s;
      margin-right: 12px;
      display: flex;
      flex-direction: ${({ open }) => open ? 'row' : 'column'};
      justify-content: space-between;
      align-items: center;
      height: 25px;
      width: 30px;
    }
  }
`

export const First = styled.div<MenuProps>`
  transition: all ease 0.5s;
  background-color: ${yellow};
  height: 3.5px;
  width: 30px;
  transform: ${({ open }) => open ? 'rotate(135deg)' : 'rotate(180deg)'};
  opacity: ${({ open }) => open ? '0' : '1'};
`
export const Second = styled.div<MenuProps>`
  transition: all ease 0.5s;
  background-color: ${yellow};
  height: 3.5px;
  width: 30px;
  transform: ${({ open }) => open ? 'rotate(90deg)' : 'rotate(180deg)'};
  opacity: ${({ open }) => open ? '0' : '1'};
`
export const Third = styled.div<MenuProps>`
  transition: all ease 0.5s;
  background-color: ${yellow};
  height: 3.5px;
  width: 30px;
  transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(180deg)'};
  z-index: 1;
  div {
    transition: all ease 0.5s;
    height: 3.5px;
    width: 30px;
    transform: ${({ open }) => open ? 'rotate(90deg)' : 'rotate(45deg)'};
    background-color: ${yellow};
    opacity: ${({ open }) => open ? '1' : '0'};
  }
`

export const Menu = styled.section<MenuProps>`
  transition: all ease 0.5s;
  position: fixed;
  height: 100vh;
  top: 80px;
  width: 70vw;
  background-color: ${yellow};
  right: ${({ open }) => open ? '30vw' : '140vw'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 80px;
  a {
    font-family: Roboto;
    font-size: 35px;
    margin-bottom: 20px;
    color: ${gray2};
    border-bottom: solid ${gray2} 2px;
  }
`

export const Logo = styled.div`
  background: url('/dev-victor.png');
  background-size: cover;
  width: 105px;
  height: 42.4px;
  margin-left: 12px;
`