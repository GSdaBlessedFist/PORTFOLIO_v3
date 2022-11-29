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
               <script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/6fd5a8ccbc5a4632736360ea6/073ba4a0d4dbab8e531f2bb2e.js");</script>
            </Head>
            <body className="bg-bgDark">
               <Main/>
               <div id='additional-project-info-portal'/>
               <div id='secondopinion-portal'/>
               <div id="dangerously-smooth-portal"/>
               <NextScript />
            </body>
         </Html>
      )
   }

