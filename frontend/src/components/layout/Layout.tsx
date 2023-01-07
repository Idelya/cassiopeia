import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Drawer } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Book Antiqua, Arial",

    body1: {
      fontFamily: "Arial",
    },
  },
  palette: {
    primary: {
      main: "#00163EFF",
    },
    secondary: {
      main: "#03DAC5FF",
    },
  },
});

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Layout;
