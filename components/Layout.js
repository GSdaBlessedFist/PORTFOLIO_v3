import {useRef,useState,useEffect} from "react";
import Image from 'next/image';
import Link from "next/link";
import emailjs from '@emailjs/browser';
import logo from "../assets/theProgression-icon.png";
import consiseLogo from "../assets/theProgression-simplifiedIcon(205x205).png";



const p = console.log;
export default function Layout({children}){

	const contactFormSection = useRef();
	const contactForm = useRef();
	const [contactSectionOpen,setContactSectionOpen]=useState(false);

	const formSubmission = function(e){
		e.preventDefault();

		emailjs.sendForm(process.env.NEXT_PUBLIC_GMAIL_SERVICE_ID, process.env.NEXT_PUBLIC_GMAIL_TEMPLATE_ID, contactForm.current, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
	      .then((result) => {
	          console.log(result.text);
	      }, (error) => {
	          console.log(error.text);
	      });
	}

	function contactOpen() {
		if(contactSectionOpen==false){
			contactFormSection.current.style.display="inline";
			
		}
		
		setContactSectionOpen(true)
	}
	
	return (<>
		    <div className="container  mx-auto w-screen md:container md:mx-auto  top-0 bg-midtone" id="topNavBar">
		      <div className=" flex justify-between" id="topNavarInner">
		      	<Link href="/">
		      		<a className="button px-4 py-2" >
		      			{/*<Image src={logo} width={112} height={30} alt={"site logo...a glyph showing a dot(representing the solid body),an open circle(representing the mind still restricted by a physical brain), and then an open circle with an arrow pointing up to show ascension"}/>*/}
		      			<Image src={consiseLogo} width={50} height={50} alt={"site logo"}/>
		      		</a>
		      	</Link>
		        <div className="flex " id="topNavBarMenuGroup">
		        	<Link href="/#web-development" id="topNavBarMenu-webDevSection" className="">
		         		<a className="button p-2 h-full flex items-center navFont hover:animate-fadeIn ">Web Development</a>
		         	</Link> 	
		         	<Link href="/#email-development" id="topNavBarMenu-emailDevSection" className="">
		         		<a className="button p-2 h-full flex items-center navFont hover:animate-fadeIn">Email Development</a>
		         	 </Link>
		        </div>
		      </div>
		    </div>

		    {children}
		    
		    <div id="footer" className="sm:bottom-0 sm:left-0 sm:right-0 mt-2">
		    	<div className="container relative mx-auto w-screen h-full flex flex-col bg-midtone md:container md:mx-auto md:sticky md:bottom-0 lg:sticky lg:bottom-0">
		    		<div id="footerInner-topRow" className="flex justify-evenly items-center ">
		    			<div className="">
		    				<p className="contentFont xs:px-10 xs:text-base text-xl"><b>Thank you for visiting my portfolio</b></p>
		    			</div>
		    			<div className="w-1/3 flex justify-between items-center">
		    				<Link href={"https://github.com/GSdaBlessedFist/PORTFOLIO_v3"}>
		                        <a id="portfolio_v3Git-link" className="button navFont font-bold border border-midtone p-[1.3rem]" target="_blank">git</a>
		                     </Link>
			    			<Link href="/">
					      		<a className="button p-4 " >
					      			<Image src={logo} width={112} height={30} alt={"site logo...a glyph showing a dot(representing the solid body),an open circle(representing the mind still restricted by a physical brain), and then an open circle with an arrow pointing up to show ascension"}/>
					      		</a>
					      	</Link>
		    			</div>
		    		</div>
		    		<div className="flex justify-evenly items-center bg-primary " id="footerInner-BottomRow">
		    			<div className="font-anton xs:text-base text-2xl tracking-wider">Jason Zamora</div>
		    			<div className="flex-grow-0">
		    				<button id="contact-footer-button" className=" relative top-0.5 navFont hover:text-accent xs:p-0 p-4 tracking-normal animate-fadeInOut xs:animate-none" onClick={contactOpen}>Contact Me</button>
		    			</div>
		    			<div>
		    				<ul>
		    					<li className="contentFont relative top-0.5 font-bold">Austin,Tx</li>
		    				</ul>
		    			</div>
		    		</div>
		    		<div id="contact-form-section" ref={contactFormSection} className="hidden ">
		    			<form action="" id="contact-form" ref={contactForm} name="contact-form" className="w-full md:h-80 flex flex-row xs:flex-col mb-4 text-base lg:text-xl bg-gradient-to-b from-bgDark to bg-primary">
		    			<div id="form-container" className="xs:h-16 w-3/4 mx-auto pt-3 flex flex-col items-end">
		    				<div className="py-2 z-20">
		    					<label htmlFor="name" className="pr-3">Name:</label>
		    					<input id="name-input" name="name" type="text" className="xs:w-3/4 text-primary  rounded-full py-2 text-center" defaultValue=""/>
		    				</div>
		    				<div className="py-2 z-20">
		    					<label htmlFor="email" className="pr-3">Email:</label>
		    					<input id="email-input" name="email" type="email" className="xs:w-3/4 text-primary rounded-full py-2 text-center" defaultValue=""/>
		    				</div>
		    				<div className="py-2 z-20">
		    					<label htmlFor="message" className="pr-3 ">Message:</label>
		    					<textarea id="message-input" name="message" rows="1" className="xs:w-full xs:mt-2 text-primary rounded-full py-2 text-center" defaultValue=""></textarea>
		    				</div>
		    				<div className="py-2 z-20">
		    					<button id="contact-submit" type="submit" className="button rounded-full b p-4" onClick={formSubmission}>SEND</button>
		    				</div>
		    			</div>
		    			<div id="footer-logo" className="p-4 ml-6 relative sm:translate-x-16 md:translate-x-32 lg:translate-x-80 xl:translate-x-1/2 xs:-translate-y-8 xs:scale-150 lg:-ml-6 opacity-25 xs:opacity-10 ">
		    				<Image src={consiseLogo} width={205} height={205} alt="the simplified logo" layout="fixed"/>
		    			</div>
		    		</form>
		    		</div>
		    	</div>
		    </div>
	</>)
}