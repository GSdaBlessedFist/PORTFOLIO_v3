import Link from "next/link";

export default function Layout({children}){
	
	return (<>
		    <div className="container mx-auto w-screen md:container md:mx-auto sticky top-0 b" id="topNavBar">
		      <div className=" flex justify-between" id="topNavarInner">
		        <a className="bg-[#223] p-4 b" href="#">LOGO</a>
		        <div className="flex " id="topNavBarMenuGroup">
		          
		          	<Link href="#" className="active" id="topNavBarMenu-home">
		          		<a className="bg-[#223] hover:bg-[#334] p-2 h-full flex items-center  b">Home</a>
		          	</Link>
		          	<Link href="#webDevSection" className="" id="topNavBarMenu-webDevSection">
		         		<a className="bg-[#223] p-2 h-full flex items-center  b">Development</a>
		         	</Link> 	
		         	<Link href="#emailDevSection" className="" id="topNavBarMenu-emailDevSection">
		         		<a className="bg-[#223] p-2 h-full flex items-center b">Marketing</a>
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