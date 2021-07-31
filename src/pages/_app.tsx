import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from 'styles/global';


function App({ Component, pageProps}: AppProps) {
    return(
        <>
        <Head>
            <title> React Avançado - Borlerplate</title>
            <link rel="stylesheet" href="/img/favicon.ico" />
            <meta name="description" content="Borlerplate de Nextjs" />
        </Head>
        <GlobalStyles/>
        <Component {...pageProps}/>
        </>
    )
}
export default App;