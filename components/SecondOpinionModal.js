import {useEffect,useState} from "react";
import {createPortal} from "react-dom";
import { useRouter } from 'next/router'

const SecondOpinionModal = ({isOpen,setIsOpen})=>{

	return isOpen
		? createPortal(<Content setIsOpen={setIsOpen}/>,
		  document.querySelector("#secondopinion-portal"))
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
		<div id="secondOpinionModal" className="animate-fadeIn">
			<div  className="absolute flex justify-center items-center opacity-1 top-8 inset-12 lg:animate-slideInRight sm:animate-slideInUp lg:top-8 ">

			<div id="secondOpinionModal-grid" className="w-full  grid grid-cols-1 grid-rows-['175px_auto'] so-border md:w-3/4 lg:w-4/5 lg:h-3/5">
				<div className="flex justify-between items-center px-5 bg-blue-400 py-5">
					<h1 className="text-3xl so-font-main font-bold ">Thank you for asking..</h1>
					<div id="secondOpinionModal-closeButton" className="text-xl so-font-main font-bold" onClick={closeModal}>X</div>
				</div>
				<div className="flex flex-col justify-center items-center so-border bg-gradient-to-t from-[#070709ff] to-blue-900 py-5">
					<div className="text-4xl so-font-main text-right px-10 pb-10">
						...so, this was just a demo landing page 
						for a made-up company, but if you got this far,
						you&apos;ll receive a demo confirmation email. 
						<br/>
						<br/><div className="w-full text-center text-blue-400">And again, thanks for clicking through.</div>
					</div>
					<button className="border-2 border-blue-400 p-4 rounded-full bg-blue-400/20 hover:bg-blue-400" onClick={closeModalNextProject}>Close and go to the next project</button>
				</div>
			</div>
		</div>
		</div>
		
		
	</>)
}


export default SecondOpinionModal

