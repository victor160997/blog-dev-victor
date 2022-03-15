import { createGlobalStyle } from 'styled-components'
import * as basicStyles from './basic-styles'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${basicStyles.darkBackground};
  }

  button {
    cursor: pointer;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`
