import React, { useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/ui/theme";
import Header from "../src/ui/header/Header";
import Footer from "../src/ui/Footer";

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Arc Development</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        //meta open graph og: pour formater les donnees pour facebook, etc
        <meta property="og:type" content="website" />
        //il faut hev=berger l'image sur un server
        <meta property="og:image" content="https://i.imgur.com/C8evBTM.png" />
        <meta property="og:image:type" content="image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="company logo" />
      </Head>
      <ThemeProvider theme={theme}>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Component
          {...pageProps}
          setSelectedIndex={setSelectedIndex}
          setValue={setValue}
        />
        <Footer setSelectedIndex={setSelectedIndex} setValue={setValue} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
