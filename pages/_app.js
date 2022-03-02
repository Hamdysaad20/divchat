import "../styles/globals.css";
import Layout from "../components/Layout";
import { NextUIProvider } from "@nextui-org/react";
import Head from "next/head";
import AppProps from "next/app";
import React from 'react';
var div="div"
function MyApp({ Component, pageProps, ...appProps }) {

  const isLayoutNeeded = [`/login`].includes(appProps.router.pathname);

  const LayoutComponent = isLayoutNeeded ? div : Layout ;
  return (
       <NextUIProvider>
      <Head>
        <title>Divchat</title>
        <meta property='og:title' content='My page title' key='title' />
        <link rel='shortcut icon' href='/favico.ico' />
      </Head>

      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </NextUIProvider>
  );
}  



export default MyApp;
