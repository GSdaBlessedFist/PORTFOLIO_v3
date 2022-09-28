import {useState,useEffect,useRef} from "react";
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';
//import {microblog_entries} from "../data/microblog-entries";
//import projectPieces from "../data/projectInfo";
//import emailDevProjectPieces from "../data/emailDevProjectInfo";
//import graphicArtPieces from "../data/graphicArtInfo";
// import {personalText,professionalText,picture,techUsed} from "../data/aboutMeInfo";
import WebDevSection from "../components/WebDevSection";
import EmailDevSection from "../components/EmailDevSection";
import GraphicArtSection from "../components/GraphicArtSection";
import AboutMeSection from "../components/AboutMeSection";


export default function Home() {

  //const microblogPhrase = "Tiny gods with tiny computers."
  // const [projects,setProjects] = useState(projectPieces);
  // const [emailDevProjects,setemailDevProjects] = useState(emailDevProjectPieces);
  // const [graphicArt,setGraphicArt] = useState(graphicArtPieces);  

  

  return (<>

    <Head>
      <title>JZ-Portfolio</title>
      {/*<script src="https://cdn.lr-in-prod.com/LogRocket.min.js" crossorigin="anonymous"></script>
            <script>window.LogRocket && window.LogRocket.init('wkpq3g/portfolio');</script>*/}
    </Head>

    <section className="container px-6 mx-auto h-screen flex flex-col justify-center items-center" id="landingPage">
      <table className="table table-auto border">
        <tbody>
          <tr id="title-row">
            <td className="pb-5  text-center">
              <div className="text-4xl font-bold">Jason Zamora&apos;s <span className="text-4xl">portfolio</span></div>
            </td>
          </tr>
          <tr id="subTitle-row">
            <td className="pb-5 text-center text-white">
              <p className="text-white">web | email developer </p>
            </td>
          </tr>
          <tr id="microBlog-row">
            <td className="py-2 text-center border border-3">
              <p>Tiny gods with tiny computers.</p>
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <WebDevSection/>
    <EmailDevSection/>
    <GraphicArtSection/>
    <AboutMeSection/>
  </>)
}


