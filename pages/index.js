import {useState,useEffect} from "react";
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';
import {microblog_entries} from "../data/microblog-entries";
import projectPieces from "../data/projectInfo";
import emailDevProjectPieces from "../data/emailDevProjectInfo";
import graphicArtPieces from "../data/graphicArtInfo";
import {personalText,professionalText,picture,techUsed} from "../data/aboutMeInfo";



export default function Home() {

  const microblogPhrase = "Tiny gods with tiny computers."
  const [projects,setProjects] = useState(projectPieces);
  const [emailDevProjects,setemailDevProjects] = useState(emailDevProjectPieces);
  const [graphicArt,setGraphicArt] = useState(graphicArtPieces);  

  useEffect(()=>{
    
  },[])

  return (<>

    <Head>
      <title>JZ-Portfolio</title>
    </Head>

    <section className="container px-6 mx-auto h-screen flex flex-col justify-center items-center" id="landingPage">
      <table className="table table-auto border">
        <tbody>
          <tr id="title-row">
            <td className="pb-5  text-center">
              <div className="text-4xl font-bold">Jason Zamora's <span className="text-4xl">portfolio</span></div>
            </td>
          </tr>
          <tr id="subTitle-row">
            <td className="pb-5 text-center text-white">
              <p className="text-white">web | email developer </p>
            </td>
          </tr>
          <tr id="microBlog-row">
            <td className="py-2 text-center border border-3">
              <p>{microblogPhrase}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <WebDevSection projects={projects}/>
    <EmailDevSection emailDevProjects={emailDevProjects}/>
    <GraphicArtSection graphicArt={graphicArt}/>
    <AboutMeSection/>
  </>)
}

const WebDevSection = ({projects})=>{
  return(<>
    <section className="container mx-auto h-fit flex flex-col " id="web-development">
      <table className=" table table-auto b">
        <tbody>
          <tr id="webDev-title-row" className="">
            <td className="pt-4 text-2xl text-white/75 " >
              <span className="pl-6">web development</span><br/>
              <span className="pl-10 relative top-[-1rem] text-6xl ">Projects</span>
              <ul id="webDevNavMenu" className="p-2 -top-11 flex flex-col relative float-right sm:top-1 sm:justify-around sm:justify-self-center sm:flex-row sm:float-none">
                <Link href="#email-development">
                  <a><li className="text-base p-2 text-right button">Email Development</li></a>
                </Link>
                <Link href="#graphic-art">
                  <a><li className="text-base p-2 text-right button">Graphic Art</li></a>
                </Link> 
                <Link href="#about-me">
                  <a><li className="text-base p-2 text-right button">About me</li></a>
                </Link>
              </ul>
            </td>           
          </tr>
          <tr id="webDev-links-row" className="border-t-2 col-span-2 flex flex-wrap justify-evenly">
            {projects.map((project,index)=>{
              return (
                <td className="shrink-0 p-2 button" key={project.id}>
                  <Link href={`#${project.id}`} key={`${project.name}-link`}>
                    <a className=" h-full" id={`${project.id}-link`} key={`${project.name}-anchor`}>
                      {project.name}
                    </a>
                  </Link>
                </td>
              )
            })}
          </tr>
          <tr id="webDev-items-row" className="flex flex-col pt-4 lg:flex-row lg:gap-2 lg:flex-wrap lg:space-around ">
            {projects.map((project,index)=>{
              return (
                <td id={`${project.id}`} className="w-11/12 mx-auto my-1 lg:w-5/12 lg:shrink-0   b" key={project.id}>
                  <div id={`${project.id}-grid`} className="grid grid-cols-[50%_50%] grid-rows-[70%_18%_12%] h-[250px] lg:h-[500px] lg:grid-rows-[50%_25%_15%] b">
                    <div id={`${project.id}-screenshot`} className="col-span-1 row-span-2 m-auto lg:col-span-2 lg:row-span-1 b ">
                      <Image src={project.screenShot} width={375} height={235} />
                    </div>
                    <div id={`${project.id}-info`} className="p-4 pt-1 lg:col-span-2 b">
                      <h1 id={`${project.id}-title`} className="text-center py-1 font-bold ">{project.name}</h1>
                      <p id={`${project.id}-description`} className="text-sm leading-4 lg:text-[1rem] lg:leading-5 lg:p-2" >{project.description}</p>
                    </div>
                    <div id={`${project.id}-techStack`} className="text-xs flex items-center justify-center p-2 text-center lg:text-sm b">
                      {project.techStack}
                    </div>
                    <div id={`${project.id}-external-links-group`} className="col-span-2 row-start-3 flex items-center justify-evenly  lg:col-span-1 b">
                      <Link href={project.url} className="">
                        <a id={`${project.id}-url`} className="font-bold button px-4" target="_blank">live site</a>
                      </Link>
                      <div className="spacer"> </div>                                         
                      <Link href={project.git}>
                        <a id={`${project.id}-github`} className="font-bold" target="_blank">github</a>
                      </Link>
                    </div>
                  </div>
                </td>
              )
            })}
          </tr>
        </tbody>
      </table>

    </section>
  </>)
}

const EmailDevSection = ({emailDevProjects})=>{

  return (<>
    <section className="container  mx-auto h-fit  flex flex-col " id="email-development">
      <table className="table table-auto">
        <tbody>
          <tr id="emailDev-title-row" className="">
            <td className=" pt-6 text-2xl text-white/75">
              <span className="pl-6">Email Development</span><br/>
              <span className="pl-10 relative top-[-1rem] text-6xl ">Projects</span>
              <ul id="emailDevNavMenu" className="p-2 -top-11 flex flex-col relative float-right sm:top-1 sm:justify-around sm:justify-self-center sm:flex-row sm:float-none">
                <Link href="#web-development">
                  <a><li className="text-base p-2 text-right button">Web Development</li></a>
                </Link>
                <Link href="#graphic-art">
                  <a><li className="text-base p-2 text-right button">Graphic Art</li></a>
                </Link> 
                <Link href="#about-me">
                  <a><li className="text-base p-2 text-right button">About me</li></a>
                </Link>
              </ul>
            </td>
          </tr>
          <tr id="emailDev-links-row" className="border-t-2 flex flex-wrap justify-evenly">
            {emailDevProjects.map((emailDevProject)=>{
              return (
                <td className="shrink-0 p-2 button" key={`${emailDevProject.id}-container`}>
                  <Link href={`#${emailDevProject.id}`} key={`${emailDevProject.name}-link`}>
                    <a className=" h-full" id={`${emailDevProject.id}-link`} key={`${emailDevProject.name}-anchor`}>
                      {emailDevProject.name}
                    </a>
                  </Link>
                </td>
              )
            })}
          </tr>
          <tr id="emailDev-items-row" className=" flex flex-col pt-4 b">
            {emailDevProjects.map((emailDevProject)=>{
              return (
                <td id={`${emailDevProject.id}`} className="w-11/12 mx-auto my-1 b" key={`${emailDevProject.id}-container`}>
                  <div id={`${emailDevProject.id}-grid`} className="grid grid-cols-[30%_auto] grid-rows-[70%_18%_auto] h-[250px] b">
                    <div id={`${emailDevProject.id}-screenshot`} className="col-span-1 row-span-2 m-auto b">insert image</div>
                    <div id={`${emailDevProject.id}-info`} className="p-4 pt-1  b">
                      <h1 id={`${emailDevProject.id}-title`} className="text-center py-1 font-bold ">{emailDevProject.name}</h1>
                      <p id={`${emailDevProject.id}-description`} className="text-sm leading-4">{emailDevProject.description}</p>
                    </div>
                    <div id={`${emailDevProject.id}-techStack`} className="text-xs flex items-center justify-center p-2 text-center b">
                      {emailDevProject.techStack}
                    </div>
                    <div id={`${emailDevProject.id}-external-links-group`} className="col-span-2 row-start-3 flex items-center justify-evenly  b">
                      <Link href={emailDevProject.url} className="">
                        <a id={`${emailDevProject.id}-url`} className="font-bold button px-4" target="_blank">live site</a>
                      </Link>
                      <div className="spacer"> </div>                                         
                      <Link href={emailDevProject.git}>
                        <a id={`${emailDevProject.id}-github`} className="font-bold" target="_blank">github</a>
                      </Link>
                    </div>
                  </div>
                </td>
              )
            })}
          </tr>
        </tbody>
      </table>
    </section>
  </>)
}

const GraphicArtSection = ({graphicArt})=>{
  return (<>
    <section className="container mx-auto h-fit  flex flex-col " id="graphic-art">
      <table className=" table table-auto b">
        <tbody>
          <tr id="graphicArt-title-row" className="">
            <td className="pt-4 text-2xl text-white/75 " >
              <span className="pl-6">Graphic</span><br/>
              <span className="pl-10 relative top-[-1rem] text-6xl ">Art</span>
              <ul id="graphicArtNavMenu" className="p-2 -top-11 flex flex-col relative float-right sm:top-1 sm:justify-around sm:justify-self-center sm:flex-row sm:float-none">
                <Link href="#web-development">
                  <a><li className="text-base p-2 text-right button">Web Development</li></a>
                </Link>
                <Link href="#email-development">
                  <a><li className="text-base p-2 text-right button">Email Development</li></a>
                </Link> 
                <Link href="#about-me">
                  <a><li className="text-base p-2 text-right button">About me</li></a>
                </Link>
              </ul>
            </td>           
          </tr>
          <tr id="graphicArt-links-row" className="border-t-2 col-span-2 flex flex-wrap justify-evenly">
            {graphicArt.map((artPiece,index)=>{
              return (
                <td className="shrink-0 p-2 button" key={artPiece.id}>
                  <Link href={`#${artPiece.id}`} key={`${artPiece.name}-link`}>
                    <a className=" h-full" id={`${artPiece.id}-link`} key={`${artPiece.name}-anchor`}>
                      {artPiece.name}
                    </a>
                  </Link>
                </td>
              )
            })}
          </tr>
          <tr id="graphicArt-items-row" className="flex flex-col pt-4 b">
            {graphicArt.map((artPiece,index)=>{
              return (
                <td id={`${artPiece.id}`} className="w-11/12 mx-auto my-1 b" key={artPiece.id}>
                  <div id={`${artPiece.id}-grid`} className="grid grid-rows-[90%_auto] h-96 b">
                      <div id={`${artPiece.image}`} className="p-1 bg-black bg-contain "></div>
                      <div id={`${artPiece.description}`} className="flex items-center justify-center">{artPiece.description}</div>
                  </div>
                </td>
              )
            })}
          </tr>
        </tbody>
      </table>
    </section>
  </>)
}

const AboutMeSection = ({aboutInfo})=>{
  return (<>
    <section className="container mx-auto h-screen flex flex-col " id="about-me">
      <table className=" table table-auto ">
        <tbody>
          <tr id="aboutMe-title-row" className="">
            <td className=" pt-6 text-2xl text-white/75">
              <span className="pl-6">About</span><br/>
              <span className="pl-10 relative top-[-1rem] text-6xl ">Me</span>
              <ul id="aboutMeNavMenu" className="p-2 -top-11 flex flex-col relative float-right border-b-2 sm:top-1 sm:justify-around sm:justify-self-center sm:flex-row sm:float-none">
                <Link href="#web-development">
                  <a><li className="text-base p-2 text-right button">Web Development</li></a>
                </Link>
                <Link href="#email-development">
                  <a><li className="text-base p-2 text-right button">Email Development</li></a>
                </Link> 
                <Link href="#graphic-art">
                  <a><li className="text-base p-2 text-right button">Graphic Art</li></a>
                </Link>
              </ul>
            </td>
          </tr>
          <tr className="">
            <div id="aboutme-grid" className=" mt-6 p-6 grid grid-cols-6 gap-4 ">
                <div id="personal-info" className="col-span-4 text-right break-words">{personalText}</div>
                <div id="personal-heading" className="col-span-2 col-start-5 flex justify-center items-center bg-gradient-to-r from-[#334] to-transparent ">
                  <h1 className="text-2xl ">Personal</h1>
                </div>

                <div id="professional-heading" className="col-span-2 col-start-1 flex justify-center items-center bg-gradient-to-l from-[#334] to-transparent">
                  <h1 className="text-2xl">Professional</h1>
                </div>
                <div id="professional-info" className="col-start-3 col-span-4 ">{professionalText}</div>
            </div>
          </tr>
          <tr id="techUsed-title" className="flex justify-center text-2xl bg-[#334] py-4">Technologies used:</tr>
          <tr id="techUsed-row" className="flex flex-wrap items-center justify-evenly  bg-white ">
            {techUsed.map((icon)=>{
              return (
                <div id={`${icon.name}-icon`} className="p-1" key={`${icon.name}`}>
                  <Image src={`/${icon.logo}`} width="40" height="40" />
                </div>
              )
            })}
          </tr>
        </tbody>
      </table>
    </section>
  </>)}