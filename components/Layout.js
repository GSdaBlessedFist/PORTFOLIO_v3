import Link from "next/link";

export default function Layout({children}){
	
	return (<>
		    <div className="container mx-auto w-screen md:container md:mx-auto b" id="topNavBar">
		      <div className=" flex justify-between" id="topNavarInner">
		        <a className=" p-4 b" href="#">LOGO</a>
		        <div className="flex " id="topNavBarMenuGroup">
		          
		          	<Link href="#" className="active" id="topNavBarMenu-home">
		          		<a className=" p-2 h-full flex items-center b">Home</a>
		          	</Link>
		          	<Link href="#webDev" className="" id="topNavBarMenu-webDev">
		         		<a className=" p-2 h-full flex items-center b">Development</a>
		         	</Link> 	
		         	<Link href="#" className="" id="topNavBarMenu-emailDev">
		         		<a className=" p-2 h-full flex items-center b">Marketing</a>
		         	</Link>
		        </div>
		      </div>
		    </div>
		    {children}
		    <div id="footer">
		    	<div className="container mx-auto w-screen md:container md:mx-auto b">
		    		<div className=" flex justify-center " id="footerInner">
		    			<p className="p-4 b">FOOTER</p>
		    		</div>
		    	</div>
		    </div>
	</>)
}