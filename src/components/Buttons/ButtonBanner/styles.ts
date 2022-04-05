import styled from "styled-components"
import { cyan, gray1, gray2, yellow } from "../../../styles/basic-styles"

export const Button = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 30px;
  border: 0;
  background-color: ${yellow};
  box-shadow: 1px 1px 11px ${gray1};
  transition: all ease 0.25s;
  span {
    font-family: roboto;
    font-weight: 500;
    color: black;
    font-size: 1.2rem;
  }
  :hover {
    box-shadow: 1px 1px 11px ${cyan};
  }
`