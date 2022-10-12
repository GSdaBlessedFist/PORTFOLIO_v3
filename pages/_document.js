import Document, { Html, Head, Main, NextScript } from "next/document"

export default function MyDocument(){

      return (
         <Html>
            <Head />
            <body className="bg-bgDark">
               <Main/>
               <div id='additional-project-info-portal'/>
               <div id='secondopinion-portal'/>
               <NextScript />
            </body>
         </Html>
      )
   }

