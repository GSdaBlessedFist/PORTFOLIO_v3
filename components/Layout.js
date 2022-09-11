import Link from "next/link";

export default function Layout({children}){
	
	return (<>
		    <div className="container mx-auto w-screen md:container md:mx-auto  top-0  b" id="topNavBar">
		      <div className=" flex justify-between" id="topNavarInner">
		        <a className="button p-4 b" href="#">LOGO</a>
		        <div className="flex " id="topNavBarMenuGroup">
		          
		          	<Link href="#" id="topNavBarMenu-home" className="active" >
		          		<a className="button p-2 h-full flex items-center  b">Home</a>
		          	</Link>
		          	<Link href="#web-development" id="topNavBarMenu-webDevSection" className="">
		         		<a className="button p-2 h-full flex items-center  b">Web Development</a>
		         	</Link> 	
		         	<Link href="#email-development" id="topNavBarMenu-emailDevSection" className="">
		         		<a className="button p-2 h-full flex items-center b">Email Development</a>
		         	</Link>
		        </div>
		      </div>
		    </div>

		    {children}
		    
		    <div id="footer">
		    	<div className="container mx-auto w-screen md:container md:mx-auto sticky bottom-0 b">
		    		<div className=" flex justify-center " id="footerInner">
		    			<p className="p-4 b">FOOTER</p>
		    		</div>
		    	</div>
		    </div>
	</>)
}