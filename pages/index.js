import Preloader from "../components/preloader";
import {useState,useEffect,useRef} from "react";
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';
import Hero from "../components/Hero";
//import hero from "../assets/portfolio-bgPic-letters(TESTER).png";
//import {microblog_entries} from "../data/microblog-entries";
import projectPieces from "../data/projectInfo";
import emailDevProjectPieces from "../data/emailDevProjectInfo";
import graphicArtPieces from "../data/graphicArtInfo";
import {AboutMePersonal,AboutMeProfessional,AboutMePicture,AboutMeTech} from "../data/aboutMeInfo";
import WebDevSection from "../components/WebDevSection";
import EmailDevSection from "../components/EmailDevSection";
import GraphicArtSection from "../components/GraphicArtSection";
import AboutMeSection from "../components/AboutMeSection";



export default function Home({projects,emailDevProjects,graphicArt,aboutMePersonal,aboutMeProfessional,aboutMePicture,aboutMeTech}) {
    


    return (<>
      <Head>
          <title>JZ-Portfolio</title>
          {/*<script src="https://cdn.lr-in-prod.com/LogRocket.min.js" crossorigin="anonymous"></script>
              <script>window.LogRocket && window.LogRocket.init('wkpq3g/portfolio');</script>*/}
      </Head>
      <div id="homepage" className="container mx-auto border-l-8 border-r-8 border-primary/75">
            
            <section id="landingPage" className=" container px-6 mx-auto h-screen flex flex-col justify-center items-center" >
              <Hero />
            </section>
          </div>
          

          <WebDevSection projects={projectPieces}/>
          <EmailDevSection emailDevProjects={emailDevProjects}/>
          <GraphicArtSection graphicArt={graphicArt}/>
          <AboutMeSection 
            aboutMePersonal={AboutMePersonal}
            aboutMeProfessional={AboutMeProfessional}
            aboutMePicture={AboutMePicture}
            aboutMeTech={AboutMeTech}
          />

      </>)
}


export const getStaticProps = async ()=>{
  return {
    props:{
      projects: projectPieces,
      emailDevProjects: emailDevProjectPieces,
      graphicArt: graphicArtPieces,
      aboutMePersonal: JSON.stringify(AboutMePersonal),
      aboutMeProfessional:JSON.stringify(AboutMeProfessional),
      aboutMePicture:JSON.stringify(AboutMePicture),
      aboutMeTech:JSON.stringify(AboutMeTech)
    }
  }}

      