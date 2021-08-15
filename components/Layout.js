import React from "react";
import Head from "next/head";
import {
  Container,
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
} from "@material-ui/core";

import Header from "./Header";
import Footer from "./Footer";

import useStyles from "../utils/styles";

const Layout = ({ title, description, children }) => {
  const theme = createMuiTheme({
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },

      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      body1: {
        fontWeight: "normal",
      },
    },
    palette: {
      type: "light",
      primary: {
        main: "#121212",
      },
      secondary: {
        main: "#208080",
      },
    },
  });
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title ? `${title} - V-Market` : `V-Market`}</title>
        <meta name="description" content={description}></meta>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Container className={classes.main}>{children}</Container>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default Layout;
