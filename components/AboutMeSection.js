//AboutMeSection
import {useState,useEffect,useRef} from "react";
import Link from "next/link";
import Image from 'next/image';
import backToToplogo from "../assets/theProgression-icon.png";

export default function AboutMeSection({aboutMePersonal,aboutMeProfessional,aboutMePicture,aboutMeTech}){


  return (<>
    <section className="container mx-auto h-full flex flex-col " id="about-me">
      <table className=" table table-auto">
        <tbody className="">
          <tr id="aboutMe-title-row" className="bg-light">
            <td className=" pt-6 text-2xl text-white/75">
              <span className="pl-6">About</span><br/>
              <span className="pl-10 relative top-[-1rem] text-6xl ">Me</span>
              <div className="float-right pr-10 overflow-hidden ">
                  <Link href="/">
                    <a className=" p-4 " >
                      <Image id="aboutMe-b2Top-button" src={backToToplogo} width={73.92} height={19.8} alt={"site logo...a glyph showing a dot(representing the solid body),an open circle(representing the mind still restricted by a physical brain), and then an open circle with an arrow pointing up to show ascension"}/>
                    </a>
                  </Link>
                </div>
              <ul id="aboutMeNavMenu" className="p-2 -top-11 flex flex-col relative bg-midtone sm:border sm:border-midtone sm:float-right sm:border-b-2 sm:top-1 sm:justify-around sm:justify-self-center sm:flex-row sm:float-none">
                <Link href="#web-development">
                  <a><li className="text-bold p-2 text-right hover:text-accent hover:animate-fadeIn">Web Development</li></a>
                </Link>
                <Link href="#email-development">
                  <a><li className="text-bold p-2 text-right hover:text-accent hover:animate-fadeIn">Email Development</li></a>
                </Link> 
                <Link href="#graphic-art">
                  <a><li className="text-bold p-2 text-right hover:text-accent hover:animate-fadeIn">Graphic Art</li></a>
                </Link>
              </ul>
            </td>
          </tr>
          <tr className="">
            <td>
              <div id="aboutme-grid" className=" mt-2 p-6  grid grid-cols-6 gap-4 lg:py-20">
                <div id="personal-info" className="col-span-4 text-right break-words font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-light lg:text-2xl">{aboutMePersonal }</div>
                <div id="personal-heading" className="col-span-2 col-start-5 flex justify-center items-center bg-gradient-to-r from-accent/20 to-transparent ">
                  <div className="text-2xl lg:text-3xl">Personal</div>
                </div>

                <div id="professional-heading" className="col-span-2 col-start-1 flex justify-center items-center bg-gradient-to-l from-accent/20 to-transparent">
                  <div className="text-2xl lg:text-3xl">Professional</div>
                </div>
                <div id="professional-info" className="col-start-3 col-span-4 break-words font-extrabold text-transparent bg-clip-text bg-gradient-to-bl from-white to-light lg:text-2xl">{aboutMeProfessional}</div>
            </div>
            </td>
          </tr>
          <tr className="">
            <td id="techUsed-title" className="flex justify-center text-2xl bg-midtone py-4">Technologies used:</td>
            <td id="techUsed-row" className="flex flex-wrap items-center justify-evenly  bg-white ">
              {aboutMeTech.map((icon)=>{
                return (
                  <div id={`${icon.name}-icon`} className="p-1" key={`${icon.name}`}>
                    <Image src={`/${icon.logo}`} width="40" height="40" alt={"a screenshot"}/>
                  </div>
                )
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </>)}


