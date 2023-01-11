import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const aboutMeTabPic = "https://i.ibb.co/LYbv7BG/about-me-tab.png",
	  blogEntryOpenedPic ="https://i.ibb.co/cJTkHMS/blog-entry-opened.png",
	  contactTabPic = "https://i.ibb.co/74khLmW/contact-tab.png",
 	  homepagePic = "https://i.ibb.co/pvr8dD2/homepage.png",
	  otherWorksTabPic = "https://i.ibb.co/2SGT3wD/other-works-tab.png",
	  technicallySectionOpenPic = "https://i.ibb.co/D4Ft28j/technically-section-open.png";

export default function ScreenshotGallery(){
	
	return (<>
		<Head>
			<title>Simple Cosmic Blog : Gallery</title>
		</Head>
			<section id="simple-cosmic-blog-gallery" data-test="simple-cosmic-blog-gallery" className="container mx-auto flex flex-col " >
				<table className=" table table-auto ">
			        <tbody>
			          <tr id="simple-cosmic-blog-title-row" className="bg-light ">
			            <td className="pt-4 text-2xl headingFont text-white/75" >
			              <span className="pl-6">Simple Cosmic Blog</span><br/>
			              <span className="pl-10 relative top-[-.5rem] text-6xl opacity-60">Screenshots</span>
			            </td>
			          </tr>
			        </tbody>
		        </table>

		        <div id="main-section" className="mx-auto flex flex-wrap justify-center gap-8 items-center p-8 border-l-8 border-r-8 border-primary/75">

		        	<div id="homepage-pic" className="lg:w-1/3 sm:w-3/4 grow bg-black drop-shadow-[0px_5px_3px_rgba(0,0,0,.5)]">
		        		<Image src={homepagePic} width={1920} height={973} alt="screenshot of homepage" />
		        		<div className="bg-primary lg:p-4 lg:text-lg"><p className="text-center">homepage</p></div>
		        	</div>

		        	<div id="blog-entry-opened" className="lg:w-1/3 sm:w-3/4 grow bg-black drop-shadow-[0px_5px_3px_rgba(0,0,0,.5)]">
						<Image src={blogEntryOpenedPic} width={1920} height={973} alt="screenshot of opened blog entry"/>		        	
		        		<div className="bg-primary lg:p-4 lg:text-lg"><p className="text-center">Opened blog entry</p></div>
		        	</div>

		        	<div id="technically-section-open-pic" className="lg:w-1/3 sm:w-3/4 grow bg-black drop-shadow-[0px_5px_3px_rgba(0,0,0,.5)]">
						<Image src={technicallySectionOpenPic} width={1920} height={973} alt="screenshot of technically section opened"/>		        	
		        		<div className="bg-primary lg:p-4 lg:text-lg"><p className="text-center">hidden technical details section</p></div>
		        	</div>

		        	<div id="other-works-tab-pic" className="lg:w-1/3 sm:w-3/4 grow bg-black drop-shadow-[0px_5px_3px_rgba(0,0,0,.5)]">
		        		<Image src={otherWorksTabPic} width={1920} height={973} alt="screenshot of other works tab opened " />
		        		<div className="bg-primary lg:p-4 lg:text-lg"><p className="text-center">other works section</p></div>
		        	</div>
		        		
		        	<div id="about-me-tab" className="lg:w-1/3 sm:w-3/4 grow bg-black drop-shadow-[0px_5px_3px_rgba(0,0,0,.5)]">
		        		<Image src={aboutMeTabPic} width={1920} height={973} alt="About Me tab" />
		        		<div className="bg-primary lg:p-4 lg:text-lg"><p className="text-center">About Me tab</p></div>
		        	</div>

		        	<div id="contact-tab-pic" className="lg:w-1/3 sm:w-3/4 grow bg-black drop-shadow-[0px_5px_3px_rgba(0,0,0,.5)]">
		        		<Image src={contactTabPic} width={1920} height={973} alt="screenshot of contact tab opened " />
		        		<div className="bg-primary lg:p-4 lg:text-lg"><p className="text-center">contact section</p></div>
		        	</div>
		        </div>
			</section>
	</>)
}
	              




