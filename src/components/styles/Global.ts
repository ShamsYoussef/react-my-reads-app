import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html,
body,
.root {
  height: 100%;
}
body {
  line-height: 1.5;
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}
body,
.app {
  background: white;
}

html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
`;
