import { createGlobalStyle } from "styled-components";

export const CssGlobalStyle = createGlobalStyle`
    * {
      scroll-behavior: smooth;
    }
    
    body {
      color: #000;
      font-size: 18px;
      font-family: Arial, Helvetica, sans-serif;
    }
`;
