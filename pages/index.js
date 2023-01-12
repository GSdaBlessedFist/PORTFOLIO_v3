//import Preloader from "../components/preloader";
import {useState,useEffect,useRef, lazy} from "react";//lazy added
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';
import Hero from "../components/Hero";
//import {microblog_entries} from "../data/microblog-entries";
import projectPieces from "../data/projectInfo";
import emailDevProjectPieces from "../data/emailDevProjectInfo";
//import graphicArtPieces from "../data/graphicArtInfo";
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
      </Head>

      <div id="homepage" className="container w-screen mx-auto border-l-8 border-r-8 border-primary/75 ">
         <section id="landingPage" className=" container px-6 mx-auto h-screen bg-bgDark flex flex-col justify-center items-center" >
            <Hero />
         </section>
            
      </div>
          

          <WebDevSection projects={projectPieces}/>
          <EmailDevSection emailDevProjects={emailDevProjects}/>
          {/*<GraphicArtSection graphicArt={graphicArt}/>*/}
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
      //graphicArt: graphicArtPieces,
      aboutMePersonal: JSON.stringify(AboutMePersonal),
      aboutMeProfessional:JSON.stringify(AboutMeProfessional),
      aboutMePicture:JSON.stringify(AboutMePicture),
      aboutMeTech:JSON.stringify(AboutMeTech)
    }
  }}

      