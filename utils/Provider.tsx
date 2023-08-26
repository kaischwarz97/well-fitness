"use client";

import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "@/app/registry";
import theme from "@/styles/theme";
import GlobalStyles from "@/styles/GlobalStyles";

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
