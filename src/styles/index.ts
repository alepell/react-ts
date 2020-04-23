import { createGlobalStyle } from 'styled-components';
import gitbg from '../assets/img/github.svg';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: #F0F0F5 url(${gitbg}) no-repeat 70% top;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
