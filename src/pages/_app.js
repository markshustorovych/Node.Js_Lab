import Head from "next/head";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>RetroDream Store</title>
        <meta name="description" content="Best retro consoles and accessories" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
