import {useState,useEffect} from "react";
import '../styles/globals.css'
//import Preloader from "../components/preloader";
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
 
  //const [loading, setLoading] = useState(false);

    // useEffect(()=>{
    //   setTimeout(() => setLoading(true), 15000);
    // },[])

  return (
    <>
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