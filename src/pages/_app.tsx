import type { AppProps } from 'next/app';
import Layout from '@/layout/index';
import NavOpenProvider from '@/context/NavOpenProvider';
import GlobalStyle from '@/styles/GlobalStyle';
import '@/styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavOpenProvider>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NavOpenProvider>
    </>
  );
}

export default MyApp;
