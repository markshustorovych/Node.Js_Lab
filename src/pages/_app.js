import { createGlobalStyle } from 'styled-components';

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
      <GlobalStyle/>
     <Component {...pageProps} />
    </>
  )
}
