import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  
  html, body {
    height: 100%;
  }

  :root {
    --bg-1: #f3f4f6;
  }
`;
