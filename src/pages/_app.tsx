import type { AppProps } from 'next/app';
import Modal from 'react-modal';
import Layout from '@/layout/index';
import NavOpenProvider from '@/context/NavOpenProvider';
import GlobalStyle from '@/styles/GlobalStyle';
import '@fullcalendar/common/main.css'; // @fullcalendar/react imports @fullcalendar/common
import '@fullcalendar/daygrid/main.css'; // @fullcalendar/timegrid imports @fullcalendar/daygrid
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
