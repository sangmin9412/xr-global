import '../styles/arialnarrow.css';
import '../styles/reset.css';
import '../styles/styles.css';
import Head from 'next/head';
import wrapper from '../store/configureStore';

const MyApp = ({ Component }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
        <meta name="format-detection" content="telephone=no" />
        <title>EXO XR GALLERY</title>
      </Head>
      <Component />
    </>
  )
}

export default wrapper.withRedux(MyApp);
