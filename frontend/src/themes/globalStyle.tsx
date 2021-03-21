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

    --accent-1: #999;
    --accent-2: #888;
    --accent-5: #666;
    --accent-7: #333;
    --accent-8: #111;

    --success-0: #d3e5ff;
    --success-1: #3291ff;
    --success-2: #0070f3;

    --cyan-1: #aaffec;
    --cyan-2: #79ffe1;
  }
`;
