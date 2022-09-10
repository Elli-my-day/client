import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize};

  html {
    height : 100vh;
    font-size: 62.5%;
  }

  body, #__next {
    position : relative;
    min-width : 100%;
    min-height : 100%;
  }
`;

export default GlobalStyle;
