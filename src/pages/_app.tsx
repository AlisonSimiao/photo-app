import * as app from 'next/app';
import { GlobalStyle } from '../styles/globals';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { ContextLayoutProvider } from '../stored/context/LayoutProvider';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps } : app.AppProps) {
  
  return <>
    <GlobalStyle />
    <ContextLayoutProvider>

      <Layout Component={Component}  pageProps={ pageProps } />
      <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
    </ContextLayoutProvider>
    
  </>
}

export default MyApp
