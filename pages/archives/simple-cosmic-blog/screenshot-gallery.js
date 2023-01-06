import Head from "next/head";
import Link from "next/link";
import Image from "next/image";


export default function ScreenshotGallery(){
	
	return (<>
		<Head>
			<title>Simple Cosmic Blog : Gallery</title>
		</Head>
		<section id="simple-cosmic-blog-gallery" data-test="simple-cosmic-blog-gallery" className="container mx-auto h-screen flex flex-col " >
			<table className=" table table-auto">
	        <tbody>
	          <tr id="webDev-title-row" className="bg-light ">
	            <td className="pt-4 text-2xl headingFont text-white/75" >
	              <span className="pl-6">Simple Cosmic Blog</span><br/>
	              <span className="pl-10 relative top-[-.5rem] text-6xl opacity-60">Screenshots</span>
	              
	            </td>
	          </tr>
	        </tbody>
	        </table>
	        <div id="main-section" className="BLUE">
	        	<Image src="" alt=""/>
	        </div>
		</section>
	</>)
}