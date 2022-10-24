import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import consiseLogo from "../../assets/theProgression-simplifiedIcon(205x205).png";
import emailDevProjectPieces from "../../data/emailDevProjectInfo";

export default function UpworkEmailDevGallery({projects}){
	
	return (<>

			<Head>
				<title>Email Development Gallery</title>
			</Head>

			<div id="email-development-gallery" className="container h-screen mx-auto flex flex-col " >
		      <table className="table table-auto ">
		        <tbody>
		          <tr id="emailDev-title-row" className="bg-midtone ">
		            <td className="w-3/4 h-[75px] text-2xl text-white/75 select-none">
		              <span className="pl-6 ">Email Development</span><br/>
		              <span className="pl-10 relative top-[-1rem] text-6xl ">Projects</span>
		            </td>
		            <td id="logo-section" className="">
		            	<div className="flex flex-col items-center ">
		            		<Link href="https://www.upwork.com/freelancers/~0155fa7997212740a3">
		            			<a className="" target="_blank">
		            				<Image id="logo-button" src={consiseLogo} width={102.5} height={102.5} alt={""} className="scale-50 "/>
		            				<h3 className="relative bottom-8 right-1">Back to Upwork</h3>
		            			</a>
		            		</Link>
		            		
		            	</div>
		            </td>
		          </tr>

		        </tbody>
		      </table>
		      <div id="emailDevProjectsGallery-row" className="mx-auto w-full  overflow-hidden bg-gradient-to-b from-bgDark to-black border-l-8 border-r-8 border-primary/75 ">
		        <div className=" p-4 pb-10 flex flex-wrap justify-evenly">
		        	{projects.map((project)=>(
		        		<div id={`project-${project.name}`} className="w-2/5 lg:w-1/6 xl:w-1/4 flex-grow xl:flex-grow-0 m-4 border-4 border-bgDark hover:border-midtone" key={project.id}>
		        			{/*<Link href={project.url}>
		        					<a className="" target="_blank">*/}
		        					<Image src={project.screenShot} width={375} height={230} alt={"a screenshot"} className="select-none"/>
		        					<div className="p-2 bg-midtone/50">
					        			<p className="text-center text-accent select-none">{project.name}</p>
					        		</div>
		        			{/*	</a>
		        			</Link>*/}
			        	</div>
		        	))}
		        </div>
		      </div>
		      <div className="block  bg-midtone container p-6 text-center text-2xl text-accent bg-midtone">Thank you for visiting the gallery.</div>	
		    </div>
	</>)
}


export const getStaticProps = async ()=>{
  return {
    props:{
      projects: emailDevProjectPieces
    }
  }}