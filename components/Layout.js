import Image from 'next/image';
import Link from "next/link";
import logo from "../assets/theProgression-icon.png";


export default function Layout({children}){
	
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
		    		<div className="flex justify-evenly items-center bg-primary py-3 px-6" id="footerInner-BottomRow">
		    			<div>Jason Zamora</div>
		    			<div>
		    				<Link href="https://github.">
			    				<a>Contact</a>
			    			</Link>
		    			</div>
		    			<div>
		    				<ul>
		    					<li>Austin,Tx</li>
		    				</ul>
		    			</div>

		    		</div>
		    	</div>
		    </div>
	</>)
}