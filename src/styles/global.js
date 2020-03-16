import { createGlobalStyle } from 'styled-components';

import theme from './theme';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing:inherit;
    font-family: -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: ${theme.typeScale.base};
    line-height: 1.5;
    color: ${theme.palette['grey-900']}
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1;
    font-size:  ${theme.typeScale.large};
  }
  
`;

export default GlobalStyle;
