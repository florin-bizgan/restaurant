import { createGlobalStyle } from "styled-components";

export const GlobalStyling = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

  // To be removed (ONLY FOR DEV)
  body,html {
    font-family: "Poppins", sans-serif;

  }
`;

export default GlobalStyling;
