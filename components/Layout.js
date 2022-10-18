import Image from 'next/image';
import Link from "next/link";
import logo from "../assets/theProgression-icon.png";

const p = console.log;
export default function Layout({children}){

	function contactOpen() {
		return null
	}
	
	return (<>
		    <div className="container mx-auto w-screen md:container md:mx-auto  top-0 bg-midtone" id="topNavBar">
		      <div className=" flex justify-between" id="topNavarInner">
		      	<Link href="/">
		      		<a className="button p-4 " >
		      			<Image src={logo} width={112} height={30} alt={"site logo...a glyph showing a dot(representing the solid body),an open circle(representing the mind still restricted by a physical brain), and then an open circle with an arrow pointing up to show ascension"}/>
		      		</a>
		      	</Link>
		        <div className="flex " id="topNavBarMenuGroup">
		        	<Link href="/#web-development" id="topNavBarMenu-webDevSection" className="">
		         		<a className="button p-2 h-full flex items-center hover:animate-fadeIn ">Web Development</a>
		         	</Link> 	
		         	<Link href="/#email-development" id="topNavBarMenu-emailDevSection" className="">
		         		<a className="button p-2 h-full flex items-center hover:animate-fadeIn">Email Development</a>
		         	 </Link>
		        </div>
		      </div>
		    </div>

		    {children}
		    
		    <div id="footer">
		    	<div className="container relative mx-auto w-screen flex flex-col bg-midtone md:container md:mx-auto md:sticky md:bottom-0 lg:sticky lg:bottom-0">
		    		<div id="footerInner-topRow" className="flex justify-evenly items-center ">
		    			<div className="">
		    				<p className="text-xl"><b>Thank you for visiting my portfolio</b></p>
		    			</div>
		    			<div className="w-1/3 flex justify-between items-center">
		    				<Link href={"https://github.com/GSdaBlessedFist/PORTFOLIO_v3"}>
		                        <a id="portfolio_v3Git-link" className="button font-bold border border-midtone p-[1.3rem]" target="_blank">git</a>
		                     </Link>
			    			<Link href="/">
					      		<a className="button p-4 " >
					      			<Image src={logo} width={112} height={30} alt={"site logo...a glyph showing a dot(representing the solid body),an open circle(representing the mind still restricted by a physical brain), and then an open circle with an arrow pointing up to show ascension"}/>
					      		</a>
					      	</Link>
		    			</div>
		    		</div>
		    		<div className="flex justify-evenly items-center bg-primary " id="footerInner-BottomRow">
		    			<div>Jason Zamora</div>
		    			<div>
		    				<button id="contact-footer-button" className="bg-primary hover:bg-light p-4" onClick={contactOpen}>Contact</button>
		    			</div>
		    			<div>
		    				<ul>
		    					<li>Austin,Tx</li>
		    				</ul>
		    			</div>
		    		</div>
		    		<form action="" id="contact-form" className="w-full lg:w-4/5 mx-auto grid grid-cols-4 mb-4 lg:grid-cols-8 grid-rows-2 o">
		    			
		    				<div id="name-section" className="col-start-1 col-span-1 lg:col-start-2 lg:col-span-3 flex justify-space items-center p-4 b">
		    					<label htmlFor="" className="font-bold pr-2">Name:</label>
		    					<input id="footer-contactName-input" type="text" className="w-[210px] lg:w-72 rounded-full bg-bgLight lg:text-xl text-primary text-center p-2 b" required/>
		    				</div>
		    				<div id="email-section" className="col-start-3 col-span-2 lg:col-start-5 lg:col-span-3 flex justify-space items-center p-4 b">
		    					<label htmlFor="" className="font-bold pr-2">email:</label>
		    					<input id="footer-contactEmail-input" type="email" className="w-[210px] lg:w-72 rounded-full bg-bgLight text-xl text-primary text-center p-2" required/>
		    				</div>
		    				<div id="contact-bottom-row" className="row-start-2 col-start-1 col-span-4 grid grid-cols-4 lg:my-auto lg:col-start-2 lg:col-span-6 lg:col-span-6 lg:grid lg:grid-cols-6 b">
		    					<div id="contact-message" className="col-start-1 col-span-3 lg:col-span-5 b">
			    					<label htmlFor="" className="font-bold pl-4 pr-2">Message:</label>
			    					<input id="footer-message-input" type="text" className="w-3/4 lg:w-5/6 lg:my-4 rounded-full bg-bgLight text-xl text-primary text-center py-2" />
			    				</div>
			    				<div id="footer-submit" className="row-start- lg:row-start-1 col-start-4 col-span-1 lg:col-start-6 lg:col-span-1 lg:flex lg:item-center mx-auto b">		    					
			    					<button  type="submit" className="button border-2 border-accent rounded-full font-bold p-2 lg:p-4  hover:text-primary hover:bg-accent" >SEND</button>
			    				</div>
		    				</div>
		    				
		    			
		    		</form>
		    	</div>
		    </div>
	</>)
}