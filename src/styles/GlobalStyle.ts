import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize};

  * {
    box-sizing : border-box;
  }

  html {
    height : 100vh;
    max-width : 100vw;
    max-height : 100vh;
    font-size: 62.5%;
  }

  body, #__next {
    position : relative;
    min-width : 100%;
    min-height : 100vh;
    max-width : 100%;
    max-height : 100%;
  }
`;

export default GlobalStyle;
