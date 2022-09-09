import {useState,useEffect} from "react";
import Image from 'next/image';
import projectPieces from "../components/projectInfo";
import {microblog_entries} from "../components/microblog-entries";

export default function Home() {

  const [projects,setProjects] = useState(projectPieces);
  const [microblogPhrase,setMicroblogPhrase]= useState('Idea of the day');

  useEffect(()=>{
    setMicroblogPhrase(microblog_entries[Math.floor(Math.random()*microblog_entries.length)].message)
  },[])

  return (<>
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
  </>)
}

const WebDevSection = ({projects})=>{
  return(<>
    <section className="container  mx-auto h-screen border border-4 flex flex-col " id="webDevSection">
      <table className="relative top-14 table table-fixed b">
        <tbody>
          <tr id="webDev-title-row">
            <td className="pl-6 pt-4 text-2xl text-white/75">
              web development<br/>
              <span className="pl-8 relative top-[-1rem] text-6xl ">Projects</span>
            </td>
          </tr>
          <tr id="webDev-items-row">

          </tr>
          
        </tbody>
      </table>
    </section>
  </>)
}

