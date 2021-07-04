import Head from '/components/head';

import '/styles/globals.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  );
}