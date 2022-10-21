//EmailDevSection
import {useState,useEffect,useRef} from "react";
import Link from "next/link";
import Image from 'next/image';
import backToToplogo from "../assets/theProgression-icon.png";
//import emailDevProjectPieces from "../data/emailDevProjectInfo";

export default function EmailDevSection({emailDevProjects}){

	//const [emailDevProjects,setemailDevProjects] = useState(emailDevProjectPieces);
		const x = emailDevProjects[0].scrWidth;
		console.log(x)
	  return (<>
	    <section className="container  mx-auto h-fit  flex flex-col " id="email-development">
	      <table className="table table-auto ">
	        <tbody>
	          <tr id="emailDev-title-row" className="bg-light ">
	            <td className=" pt-6 text-2xl text-white/75">
	              <span className="pl-6">Email Development</span><br/>
	              <span className="pl-10 relative top-[-1rem] text-6xl ">Projects</span>
	              <div className="float-right pr-10 overflow-hidden ">
	                <Link href="/">
	                  <a className=" p-4 " >
	                    <Image id="emailDev-b2Top-button" src={backToToplogo} width={73.92} height={19.8} alt={"site logo...a glyph showing a dot(representing the solid body),an open circle(representing the mind still restricted by a physical brain), and then an open circle with an arrow pointing up to show ascension"}/>
	                  </a>
	                </Link>
	              </div>
	              <ul id="emailDevNavMenu" className="p-2 -top-11 flex flex-col relative bg-midtone sm:border sm:border-midtone sm:float-right sm:top-1 sm:justify-around sm:justify-self-center sm:flex-row sm:float-none">
	                <Link href="#web-development">
	                  <a><li className="text-bold p-2 text-right hover:text-accent hover:animate-fadeIn">Web Development</li></a>
	                </Link>
	                <Link href="#graphic-art">
	                  <a><li className="text-bold p-2 text-right hover:text-accent hover:animate-fadeIn">Graphic Art</li></a>
	                </Link> 
	                <Link href="#about-me">
	                  <a><li className="text-bold p-2 text-right hover:text-accent hover:animate-fadeIn">About me</li></a>
	                </Link>
	              </ul>
	            </td>
	          </tr>
	          <tr id="emailDev-links-row" className="border-t-2 flex flex-wrap justify-evenly">
	          	            {emailDevProjects.map((emailDevProject)=>{
	          	              return (
	          	                <td className="grow py-2 px-3 flex justify-center items-center border border-2 border-primary hover:bg-gradient-to-t from-accent/10 hover:text-accent hover:border hover:border-2 hover:border-accent hover:bg-transparent" key={`${emailDevProject.id}-container`}>
	          	                  <Link href={emailDevProject.url} key={`${emailDevProject.name}-link`}>
	          	                    <a className=" h-full hover:text-accent" id={`${emailDevProject.id}-link`} key={`${emailDevProject.name}-anchor`}>
	          	                      {emailDevProject.name}
	          	                    </a>
	          	                  </Link>
	          	                </td>
	          	              )
	          	            })}
	          	          </tr>
	          	          <tr id="emailDev-items-row" className=" flex flex-col pt-4 lg:flex-row lg:gap-2 lg:flex-wrap lg:space-around">
	          	            {emailDevProjects.map((emailDevProject)=>{
	          	              return (
	          	                <td id={`${emailDevProject.id}`} className=" w-11/12 mx-auto my-1 " key={`${emailDevProject.id}-container`}>
	          	                  <div id={`${emailDevProject.id}-grid`} className="grid grid-cols-[200px_auto] lg:grid-cols-[400px_auto] grid-rows-[76%_auto] h-[250px] overflow-hidden my-4 border border-4 border-light shadow-xl ">
	          	                    <div id={`${emailDevProject.id}-screenshot`} className="col-span-1 row-span-2 h-full flex items-center ">
	          	                    	<div className="" >
	          	                    		<Image src={emailDevProject.screenShot} alt="landing page screenshot" width={400} height={236} className=""/>
	          	                    	</div>
	          	                    </div>
	          	                    <div id={`${emailDevProject.id}-info`} className=" ">
	          	                      <h1 id={`${emailDevProject.id}-title`} className="text-center py-1 font-bold bg-midtone text-accent text-2xl">{emailDevProject.name}</h1>
	          	                      <p id={`${emailDevProject.id}-description`} className="text-sm lg:text-xl leading-4 p-4">{emailDevProject.description}</p>
	          	                    </div>


	          	                    <div id={`${emailDevProject.id}-techStack`} className="text-sm text-light flex items-center justify-evenly text-center lg:text-sm" >
	          	                      
	          	                      <div className="bg-midtone grow h-full flex justify-center items-center ">{emailDevProject.techStack}</div>
	          	                      <div id={`${emailDevProject.id}-link-section`} className="bg-primary w-1/3 h-full flex justify-center items-center ">
	          	                      	<Link href={emailDevProject.url}>
					                       <a id={`${emailDevProject.id}-link`} className="font-bold p-3 border border-primary text-midtone hover:border hover:border-2 hover:border-midtone" >go to project</a>
					                    </Link>
	          	                      </div>
	          	                    </div>


	          	                    {/*<div id={`${emailDevProject.id}-external-links-group`} className="col-span-2 row-start-3 flex items-center justify-evenly ">
	          	                      <Link href={emailDevProject.url} className="">
	          	                        <a id={`${emailDevProject.id}-url`} className="font-bold button px-4" target="_blank">live site</a>
	          	                      </Link>
	          	                      <div className="spacer"> </div>                                         
	          	                      <Link href={emailDevProject.git}>
	          	                      	  <a id={`${emailDevProject.id}-github`} className="font-bold" target="_blank">github</a>
	          	                      /Link>
	          	                    </div>*/}
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