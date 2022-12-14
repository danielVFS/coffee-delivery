import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    color: ${(props) => props.theme["base-text"]};
    background: ${(props) => props.theme.background}
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
  }

  button {
    outline: 0;
    border: 0;
  }
`;

export const ListDivider = styled.div`
  width: 100%;
  height: 1px;
  background: ${(props) => props.theme["base-button"]};
`;
