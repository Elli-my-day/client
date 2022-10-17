import type { AppProps } from 'next/app';
import Layout from '@/layout/index';
import ThemeProvider from '@/context/ThemeProvider';
import NavOpenProvider from '@/context/NavOpenProvider';
import '@/styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <NavOpenProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NavOpenProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
