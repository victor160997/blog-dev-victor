import styled from "styled-components"
import { tablet, mobile } from '../../styles/basic-styles'

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
  ${tablet} {
    width: 768px;
  }
  ${mobile} {
    width: 100vw;
    padding: 80px 0 0 10px;
  }
`