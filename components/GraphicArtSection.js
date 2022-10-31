//GraphicArtSection
import {useState,useEffect,useRef} from "react";
import Link from "next/link";
import Image from 'next/image';
import backToToplogo from "../assets/theProgression-icon.png";

export default function GraphicArtSection({graphicArt}){

	//const [graphicArt,setGraphicArt] = useState(graphicArtPieces);  
	
	  return (<>
	    <section className="container mx-auto h-fit  flex flex-col " id="graphic-art">
	      <table className=" table table-auto b">
	        <tbody>
	          <tr id="graphicArt-title-row" className="bg-light">
	            <td className="pt-4 text-2xl headingFont text-white/75 " >
	              <span className="pl-6">Graphic</span><br/>
	              <span className="pl-10 relative top-[-.5rem] text-6xl ">Art</span>
	              <div className="float-right pr-10 overflow-hidden ">
	                <Link href="/">
	                  <a className=" p-4 " >
	                    <Image id="graphicArt-b2Top-button" src={backToToplogo} width={73.92} height={19.8} alt={"site logo...a glyph showing a dot(representing the solid body),an open circle(representing the mind still restricted by a physical brain), and then an open circle with an arrow pointing up to show ascension"}/>
	                  </a>
	                </Link>
	              </div>
	              <ul id="graphicArtNavMenu" className="p-2 -top-11 flex flex-col relative bg-midtone sm:border sm:border-midtone sm:float-right sm:top-1 sm:justify-around sm:justify-self-center sm:flex-row sm:float-none">
	                <Link href="#web-development">
	                  <a><li className="navFont p-2 text-center hover:text-accent hover:animate-fadeIn">Web Development</li></a>
	                </Link>
	                <Link href="#email-development">
	                  <a><li className="navFont p-2 text-center hover:text-accent hover:animate-fadeIn">Email Development</li></a>
	                </Link> 
	                <Link href="#about-me">
	                  <a><li className="navFont p-2 text-center hover:text-accent hover:animate-fadeIn">About me</li></a>
	                </Link>
	              </ul>
	            </td>           
	          </tr>
	          <tr id="graphicArt-links-row" className="border-t-2 col-span-2 flex flex-wrap justify-evenly">
	            {graphicArt.map((artPiece,index)=>{
	              return (
	                <td className="py-2 px-2 flex justify-center items-center itemFont  border border-2 border-bgDark hover:bg-gradient-to-t from-accent/10 hover:text-accent hover:border hover:border-2 hover:border-accent hover:bg-transparent" key={artPiece.id}>
	                  <Link href={`#${artPiece.id}`} key={`${artPiece.name}-link`}>
	                    <a className=" h-full " id={`${artPiece.id}-link`} key={`${artPiece.name}-anchor`}>
	                      {artPiece.name}
	                    </a>
	                  </Link>
	                </td>
	              )
	            })}
	          </tr>
	          <hr className="h-1 bg-primary/25 border-0 dark:bg-gray-700"/>
	          <tr id="graphicArt-items-row" className="flex flex-col pt-4 lg:flex-row lg:gap-2 lg:flex-wrap lg:space-around border-l-8 border-r-8 border-primary/75">
	            {graphicArt.map((artPiece,index)=>{
	              return (
	                <td id={`${artPiece.id}`} className="w-11/12 mx-auto my-1 " key={artPiece.id}>
	                  <div id={`${artPiece.id}-grid`} className="grid grid-rows-[90%_auto] h-96 my-4 border border-4 border-light shadow-xl ">
	                      <div id={`${artPiece.image}`} className="p-1 bg-black bg-contain "></div>
	                      <div id={`${artPiece.description}`} className="flex items-center justify-center">
	                      	<p className="text-light">{artPiece.description}</p>
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




