import { createGlobalStyle } from "styled-components";

export const GlobalStyling = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
  }

  // To be removed (ONLY FOR DEV)
  body {
    padding: 20px;
    font-family: "Poppins", sans-serif;
  }

`;

export default GlobalStyling;
