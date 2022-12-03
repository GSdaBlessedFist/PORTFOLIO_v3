import Preloader from "../components/preloader";
import {useState,useEffect,useRef, lazy} from "react";//lazy added
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';
import Hero from "../components/Hero";
import WelcomeBanner from "../components/WelcomeBanner";
//import {microblog_entries} from "../data/microblog-entries";
import projectPieces from "../data/projectInfo";
import emailDevProjectPieces from "../data/emailDevProjectInfo";
import graphicArtPieces from "../data/graphicArtInfo";
import {AboutMePersonal,AboutMeProfessional,AboutMePicture,AboutMeTech} from "../data/aboutMeInfo";

const WebDevSection = React.lazy(()=>import("../components/WebDevSection"));
//import WebDevSection from "../components/WebDevSection";
const EmailDevSection = React.lazy(()=>import("../components/EmailDevSection"));
//import EmailDevSection from "../components/EmailDevSection";
const GraphicArtSection = React.lazy(()=>import("../components/GraphicArtSection"));
//import GraphicArtSection from "../components/GraphicArtSection";
const AboutMeSection = React.lazy(()=>import("../components/AboutMeSection"));
//import AboutMeSection from "../components/AboutMeSection";



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
            <div className="relative -top-[48px] -left-8 text-lg xl:-top-[90px] xl:-left-16 font-anton text-white xl:text-[2.5rem] z-30">Jason Zamora</div>
            <WelcomeBanner/>
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

      