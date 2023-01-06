import Document, { Html, Head, Main, NextScript } from "next/document"

export default function MyDocument(){

      return (
         <Html>
            <Head>
               <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
               <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
               <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
               <link rel="manifest" href="/site.webmanifest"/>
               <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap" rel="stylesheet"/>
               <link href="https://fonts.googleapis.com/css2?family=Cutive&family=Anton&family=Quicksand:wght@400;500;600;700&family=Varela+Round&display=swap" rel="stylesheet"/>
               <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet"/>
               <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"/> 
               <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Yellowtail&display=swap" rel="stylesheet"/>
               
            </Head>
            {/*<body className="bg-bgDark">*/}
            <body className="bg-gradient-to-r from-black via-midtone to-black">
               <Main/>
               <div id='additional-project-info-portal'/>
               <div id='secondopinion-portal'/>
               <div id="dangerously-smooth-portal"/>
               <NextScript />
            </body>
         </Html>
      )
   }

