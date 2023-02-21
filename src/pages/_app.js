import React from 'react';
import Head from 'next/head';
import Script from 'next/script';


export default function App({ Component, pageProps }) {
  const isDev = process.env.NODE_ENV === 'development'

  return (
    <React.Fragment>
      <Head>
        <title>Competition Test</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>

      <Component {...pageProps} />

    </React.Fragment>
  );
}
