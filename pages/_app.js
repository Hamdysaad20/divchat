import "../styles/globals.css";
import Layout from "../components/Layout";
import { NextUIProvider } from "@nextui-org/react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Head>
        <title>Divchat</title>
        <meta property='og:title' content='My page title' key='title' />
        <link rel='shortcut icon' href='/favico.ico' />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  );
}

export default MyApp;
