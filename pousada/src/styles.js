import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  header img {
  width: 100px; /* Ajuste o tamanho conforme necessário */
  height: auto;
}


  body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #008B8B;
  }

  a {
    color: #008B8B;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default GlobalStyle;
