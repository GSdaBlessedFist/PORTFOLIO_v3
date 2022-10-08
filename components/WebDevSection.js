//WebDevSection
import {useState,useEffect,useRef} from "react";
import Link from "next/link";
import Image from 'next/image';
import projectPieces from "../data/projectInfo";


export default function WebDevSection(){

  const [projects,setProjects] = useState(projectPieces);
  const linkEmail = useRef();

  return(<>
    <section className="container mx-auto h-fit flex flex-col " id="web-development">
      <table className=" table table-auto b">
        <tbody>
          <tr id="webDev-title-row" className="bg-light">
            <td className="pt-4 text-2xl text-white/75 " >
              <span className="pl-6">web development</span><br/>
              <span className="pl-10 relative top-[-1rem] text-6xl ">Projects</span>
              <ul id="webDevNavMenu" className="p-0 -top-11 flex flex-col  relative bg-midtone sm:border sm:border-midtone sm:float-right sm:top-1 sm:justify-around sm:justify-self-center sm:flex-row sm:float-none">
                <Link ref={linkEmail} href="#email-development"> 
                  <a ><li className="text-bold p-2 text-right hover:text-accent hover:animate-fadeIn">Email Development</li></a>
                </Link> 
                <Link href="#graphic-art">  
                  <a ><li className="text-bold p-2 text-right hover:text-accent hover:animate-fadeIn">Graphic Art</li></a>
                </Link> 
                <Link href="#about-me"> 
                  <a ><li className="text-bold p-2 text-right hover:text-accent hover:animate-fadeIn">About me</li></a>
                </Link> 
              </ul>
            </td>           
          </tr>
          <tr id="webDev-links-row" className="border-t-2 col-span-2 flex flex-wrap justify-evenly">
            {projects.map((project,index)=>{
              return (
                <td className="grow py-2 px-3 flex justify-center items-center border border-2 border-primary hover:bg-gradient-to-t from-accent/10 hover:text-accent hover:border hover:border-2 hover:border-accent hover:bg-transparent" key={project.id}>
                   <Link href={`#${project.id}`} key={`${project.name}-link`}> 

                    <a className="h-full " id={`${project.id}-link`} key={`${project.name}-anchor`}>
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
                <td id={`${project.id}`} className="w-11/12 mx-auto my-1 lg:w-5/12 lg:shrink-0" key={project.id}>
                  <div id={`${project.id}-grid`} className="grid grid-cols-[50%_50%] grid-rows-[70%_18%_12%] h-[250px] border border-4 border-light my-4 lg:h-[450px] lg:grid-rows-[50%_150px_auto]">
                    <div id={`${project.id}-screenshot`} className="col-span-1 row-span-2 m-auto lg:col-span-2 lg:row-span-1 ">
                      <Image src={project.screenShot} width={375} height={235} alt={"a screenshot"}/>
                    </div>
                    <div id={`${project.id}-info`} className="p-4 pt-1 lg:col-span-2 ">
                      <h1 id={`${project.id}-title`} className="text-center py-1 font-bold text-accent text-2xl lg:pt-5">{project.name}</h1>
                      <p id={`${project.id}-description`} className="text-sm leading-4  lg:text-[1rem] lg:leading-5 lg:p-4 lg:border-b-4 border-white" >{project.description}</p>
                    </div>
                    <div id={`${project.id}-techStack`} className="text-sm text-light flex items-center justify-center border border-lightMidtone p-2 text-center lg:text-sm ">
                      {project.techStack}
                    </div>
                    <div id={`${project.id}-external-links-group`} className="col-span-2 row-start-3 flex items-center justify-evenly bg-midtone lg:col-span-1 ">
                      <Link href={project.url} className="">
                        <a id={`${project.id}-url`} className="font-bold px-4 border border-midtone hover:border hover:border-accent " target="_blank">live site</a>
                      </Link>
                      <div className="spacer"> </div>                                         
                      <Link href={project.git}>
                        <a id={`${project.id}-github`} className="font-bold px-4 border border-midtone hover:border hover:border-accent " target="_blank">github</a>
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