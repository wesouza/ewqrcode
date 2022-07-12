/* eslint-disable @next/next/no-sync-scripts */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (<>

 
<Component {...pageProps} />
<ToastContainer autoClose={3000} />
  </>

)
}

export default MyApp


