import Link from "next/link";



export default function Layout({children}){
	
	return (<>
		    <div className="container mx-auto w-screen md:container md:mx-auto  top-0 bg-midtone" id="topNavBar">
		      <div className=" flex justify-between" id="topNavarInner">
		      	<Link href="/">
		      		<a className="button p-4 " >LOGO</a>
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
		    	<div className="container relative mx-auto w-screen md:container md:mx-auto md:sticky md:bottom-0 lg:sticky lg:bottom-0 b">
		    		<div className=" flex justify-center " id="footerInner">
		    			<p className="p-4 b">FOOTER</p>
		    		</div>
		    	</div>
		    </div>
	</>)
}