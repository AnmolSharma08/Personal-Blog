import '../styles/globals.css'
import Layout from '../components/layout/layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return(
      <Layout >
        <Head>
          <title>Anmol's Anime</title>
          <meta name='description' content='This is anime website or we can say personal blog created by anmol aka me to keep my anime safe.'></meta>
        </Head>
      <Component {...pageProps} />
      </Layout>
  ) 
}

export default MyApp

