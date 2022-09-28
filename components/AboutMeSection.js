//AboutMeSection
import {useState,useEffect,useRef} from "react";
import Link from "next/link";
import Image from 'next/image';
import {personalText,professionalText,picture,techUsed} from "../data/aboutMeInfo";

export default function AboutMeSection(){
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
                  <Image src={`/${icon.logo}`} width="40" height="40" alt={"a screenshot"}/>
                </div>
              )
            })}
          </tr>
        </tbody>
      </table>
    </section>
  </>)}


