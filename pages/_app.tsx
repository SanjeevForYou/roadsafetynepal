import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../styles/createEmotionCache';
import Header from "@components/Header";
import Footer from "@components/Footer";
import Box from "@mui/material/Box";

import "/styles/globals.css";
import theme from '../styles/theme';


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Road Safety Nepal</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
         <Box sx={{ height: "100%", display: `flex`, flexDirection: "column" }}> 
           <Box sx={{ flex: "1 0 auto" }}>
              <Header />
              <Component {...pageProps} />
           </Box>
           <Box sx={{ flexShrink : 0 }}>
              <Footer />
           </Box>
         </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}