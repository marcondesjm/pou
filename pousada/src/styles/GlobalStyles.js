// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  h1, h2, h3, h4, h5, h6 {
    color: #b15a00;
  }
  
  p {
    color: #333;
  }
`;

export default GlobalStyles;
