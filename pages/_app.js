import {useState,useEffect} from "react";
import { useRouter } from 'next/router';
import '../styles/globals.css'
import Script from "next/script";
//import Preloader from "../components/preloader";
import Layout from '../components/Layout'
import * as gtag from "../lib/gtag";

function MyApp({ Component, pageProps }) {
 
  //const [loading, setLoading] = useState(false);

    // useEffect(()=>{
    //   setTimeout(() => setLoading(true), 15000);
    // },[])

    const router = useRouter();
 
    useEffect(() => {
      const handleRouteChange = (url) => {
        gtag.pageview(url);
      };
   
      router.events.on("routeChangeComplete", handleRouteChange);
   
      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }, [router.events]);

  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-8KJ3YKTN3T" strategy="afterInteractive"/>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-8KJ3YKTN3T',{
            page_path: window.location.pathname,
          });
        `}
      </Script>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp

// PRELOADER setup
// return (
//     <>
//       {loading ? (
//         <Layout>
//           <Component {...pageProps} />
//         </Layout>
//       ) : (
//         <Preloader />
//       )}
//     </>
//   )