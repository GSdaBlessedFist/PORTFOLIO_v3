import {useEffect,useState} from "react";
import {createPortal} from "react-dom";
import { useRouter } from 'next/router'
import EmailOrScreenShot from "./EmailOrScreenShot";

const DangerouslySmoothModal = ({isOpen,setIsOpen,email})=>{
	
	return isOpen
		? createPortal(<Content setIsOpen={setIsOpen}/>,
		  document.querySelector("#dangerously-smooth-portal"))
		: null
}

const Content = ({setIsOpen})=>{

	const router = useRouter();
	function closeModal(){
		setIsOpen(false)
	};
	function closeModalNextProject(){
		setIsOpen(false);
		router.push('/')
	};

	return (<>
		<div id="dangerouslySmoothModal" className="animate-fadeIn ">
			<div  className="absolute flex justify-center items-center opacity-1 -top-8 inset-12 lg:animate-slideInRight sm:animate-slideInUp lg:top-8 drop-shadow-2xl">

			<div id="dangerouslySmoothModal-grid" className="w-full  grid grid-cols-1 grid-rows-['75px_auto'] ds-border  md:w-3/4 lg:w-4/5 lg:h-3/5">
				<div className=" px-2 bg-dsDarkPrimary py-4">
					<h1 className="col-start-1 col-span-1 text-2xl ds-font-main font-bold text-dsAccent text-center ">Hey, I wish I could tell you this is a real company...</h1>
					{/*<div id="dangerouslySmoothModal-closeButton" className="col-start-2 col-span-1 text-xl ds-font-main font-bold b" onClick={closeModal}>X</div>*/}
				</div>
				<div className="flex flex-col justify-center items-center ds-border bg-gradient-to-b from-dsPrimary to-dsDarkPrimary py-5">
					<div className="text-lg ds-font-minor xs:px-5 px-10 pb-10">
						What I <span className="xs:text-2xl text-dsAccent">can</span> tell you is that you have a choice on whether you want to get the email or just check out the screenshot.
					</div>
					<div id="choices-section">
						<EmailOrScreenShot/>
					</div>
					<button className="xs:w-2/3 border-2 border-dsAccent/30 xs:p-1 rounded-full bg-dsPrimary/20 hover:bg-dsPrimary hover:border-dsAccent text-dsPrimary hover:text-dsAccent" onClick={closeModalNextProject}>Close and go to the next project</button>
				</div>
			</div>
		</div>
		</div>
		
		
	</>)
}


export default DangerouslySmoothModal

