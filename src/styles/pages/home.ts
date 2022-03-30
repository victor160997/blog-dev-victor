import styled from 'styled-components'
import { cyan } from '../basic-styles'

export const Teste = styled.div`
  /* background-color: green; */
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  h1 {
    font-size: 50px;
    font-family: Roboto;
  }
  div {
    max-width: 600px;
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
    font-size: 4rem;
    line-height: 3.3rem;
    font-weight: 900;
    margin-top: 2.5rem;
    color: white;

    span {
      color: ${cyan};
      filter: drop-shadow(2px 2px 2px ${cyan});
    }
  }
  }
  img {
    filter: drop-shadow(5px 5px 5px ${cyan});
    width: 500px;
  }
`