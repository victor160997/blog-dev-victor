import styled from 'styled-components'
import { cyan, gray2, mobile, tablet, yellow, yellow07 } from '../../../styles/basic-styles'

export const Teste = styled.div`
  /* background-color: green; */
  background: linear-gradient(-170deg, rgba(97, 218, 251, 0.7) 30%, transparent 65%) no-repeat;
  /* background-size: cover; */
  height: 370px;
  width: 100vw;
  padding-bottom: 15px;
  padding-top: 15px;
  display: flex;
  justify-content: center;
  border-bottom: solid ${gray2} 3px;
  h1 {
    font-size: 50px;
    font-family: Roboto;
  }
  h3 {
    margin-top: 1.5rem;
    font-size: 25px;
    font-family: Roboto;
    color: white;
    font-weight: bold;
  }
  div {
    /* background: red; */
    display: flex;
    flex-direction: row;
    width: 1016px;
    img {
      width: 557.823;
      height: 294px;
    }
    div {
      display: flex;
      flex-direction: column;
      > span {
        font-size: 1.5rem;
        font-weight: bold;
        color: white;
        font-family: roboto;
        margin-bottom: 0px;
      }
      h1 {
        font-size: 3.5rem;
        line-height: 1.5rem;
        font-weight: 900;
        margin-top: 2.5rem;
        color: white;

        span {
          color: ${cyan};
        }
      }
    }
  }

  ${tablet} {
    h3 {
      margin-top: 1.5rem;
      font-size: 20px;
    }
    div {
      /* background: red; */
      display: flex;
      flex-direction: row;
      width: 768px;
      > span {
        display:none;
      }
      img {
        width: 390.41;
        height: 205.8px;
      }
      div {
        display: flex;
        flex-direction: column;
        h1 {
          font-size: 3rem;
          line-height: 1.2rem;
        }
      }
    }
  }

  ${mobile} {
    height: fit-content;
    h3 {
      margin-top: 1.5rem;
      font-size: 17px;
    }
    div {
      /* background: red; */
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      width: 100%;
      img {
        width: 312.328px;
        height: 164.64px;
      }
      div {
        display: flex;
        flex-direction: column;
        h1 {
          font-size: 2.5rem;
          line-height: 1.2rem;
        }
      }
    }
  }

`