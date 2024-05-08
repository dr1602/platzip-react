import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./globalStyle";

const themes = {
  revengers: {
    bg: "#a78fff",
    animation: "wiggle",
    color: "#f8ff6a",
    color2: "#f8ff6a",
  },
  spudermoon: {
    bg: "#ff564f",
    animation: "grow",
    color: "#9349ff",
    color2: "#5766ff",
  },
  baturuman: {
    bg: "#737574",
    animation: "wiggle",
    color: "#f8ff6a",
    color2: "#f8ff6a",
  },
  journeyrabbit: {
    bg: "#ff564f",
    animation: "grow",
    color: "#737574",
    color2: "#737574",
  },
  bluepenter: {
    bg: "#737574",
    animation: "wiggle",
    color: "#a78fff",
    color2: "#a78fff",
  },
  rivergensmidgame: {
    bg: "#a78fff",
    animation: "grow",
    color: "#f8ff6a",
    color2: "#f8ff6a",
  },
};

export const Theme = (props) => (
  <ThemeProvider theme={themes[props.theme.toLowerCase()]}>
    <GlobalStyle />
    {props.children}
  </ThemeProvider>
);
