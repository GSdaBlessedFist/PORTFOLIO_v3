import {useState,useEffect} from "react";
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';
import projectPieces from "../data/projectInfo";
import emailProjectPieces from "../data/emailProjectInfo";
import {microblog_entries} from "../data/microblog-entries";


export default function Home() {

  const [projects,setProjects] = useState(projectPieces);
  const [emailProjects,setEmailProjects] = useState(emailProjectPieces);
  const [microblogPhrase,setMicroblogPhrase]= useState('Idea of the day');

  useEffect(()=>{
    setMicroblogPhrase(microblog_entries[Math.floor(Math.random()*microblog_entries.length)].message)
  })

  return (<>

    <Head>
      <title>JZ-Portfolio</title>
    </Head>

    <section className="container px-6 mx-auto h-screen border border-4 flex flex-col justify-center items-center" id="landingPage">
      <table className="table table-auto border">
        <tbody>
          <tr id="title-row">
            <td className="pb-5  text-center">
              <div className="text-4xl font-bold">Jason Zamora's <span className="text-4xl">portfolio</span></div>
            </td>
          </tr>
          <tr id="subTitle-row">
            <td className="pb-5 text-center text-white">
              <p className="text-white">web developer | digital marketer </p>
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
    <EmailDevSection emailProjects={emailProjects}/>
  </>)
}

const WebDevSection = ({projects})=>{
  return(<>
    <section className="container mx-auto h-screen border border-4 flex flex-col " id="web-development">
      <table className="relative top-14 table table-fixed b">
        <tbody>
          <tr id="webDev-title-row">
            <td className="pl-6 pt-4 text-2xl text-white/75">
              web development<br/>
              <span className="pl-8 relative top-[-1rem] text-6xl ">Projects</span>
            </td>
          </tr>
          <tr id="webDev-links-row" className="flex flex-wrap justify-evenly">
            {projects.map((project)=>{
              return (<>
                <td className="shrink-0 p-2 button" key="{project.id}">
                  <Link href={`#${project.id}`}><a className=" h-full" id={`${project.id}-link`}>{project.name}</a></Link>
                </td>
              </>)
            })}
          </tr>
          <tr id="webDev-items-row" className="flex flex-col pt-4 b">
            {projects.map((project)=>{
              return (<>
                <div id={`${project.id}`} className="w-11/12 mx-auto my-1 b" key={`${project.id}-container`}>
                  <div id={`${project.id}-grid`} className="grid grid-cols-[30%_auto] grid-rows-[70%_22%_8%] h-42 b">
                    <div id={`${project.id}-screenshot`} className="col-span-1 row-span-2 m-auto b">insert image</div>
                    <div id={`${project.id}-info`} className="p-4 pt-1  b">
                      <h1 id={`${project.id}-title`} className="text-center py-1 font-bold ">{project.name}</h1>
                      <p id={`${project.id}-description`} className="text-sm leading-4">{project.description}</p>
                    </div>
                    <div id={`${project.id}-techStack`} className="text-xs flex items-center justify-center p-2 text-center b">
                      {project.techStack}
                    </div>
                    <div id={`${project.id}-external-links-group`} className="col-span-2 row-start-3 flex items-center justify-evenly p-2 b">
                      <Link href={project.url} className="">
                        <a id={`${project.id}-url`} className="font-bold button px-4" target="_blank">live site</a>
                      </Link>
                      <div className="spacer"> </div>                                         
                      <Link href={project.git}>
                        <a id={`${project.id}-github`} className="font-bold" target="_blank">github</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </>)
            })}
          </tr>
        </tbody>
      </table>

    </section>
  </>)
}

const EmailDevSection = ({emailProjects})=>{

  return (<>
    <section className="container  mx-auto h-screen border border-4 flex flex-col " id="digital-marketing">
      <table className="relative top-14 table table-fixed o">
        <tbody>
          <tr id="digitalMarketing-title-row">
            <td className="pl-6 pt-6 text-2xl text-white/75">
              Digital Marketing<br/>
              <span className="pl-8 relative top-[-1rem] text-6xl ">Projects</span>
            </td>
          </tr>
          <tr id="digitalMarketing-links-row" className="flex flex-wrap justify-evenly">
            {emailProjects.map((emailproject)=>{
              return (<>
                <td className="shrink-0 p-2 button" key="{emailproject.id}">
                  <Link href={`#${emailproject.id}`}><a className=" h-full" id={`${emailproject.id}-link`}>{emailproject.name}</a></Link>
                </td>
              </>)
            })}
          </tr>
        </tbody>
      </table>
    </section>
  </>)
}