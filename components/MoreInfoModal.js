import {createPortal} from "react-dom";
//import { useRouter } from 'next/router'

export default function MoreInfoModal({isOpen,setIsOpen,name,short,description,learned}){
	
	
	return isOpen
		? createPortal(<Content  setIsOpen={setIsOpen} name={name} short={short} description={description} learned={learned}/>,
			document.querySelector("#additional-project-info-portal"))
		: null
}

const Content = ({setIsOpen,name,short,description,learned})=>{
	
	const concepts = Array.from(learned);

	function closeAdditionalInfo(){
		setIsOpen(false);
		document.querySelector("body").style.overflow = 'visible';
	};


	return (<>
		<div id="MoreInfoModal" className="animate-fadeIn">
			<div id="overlay" className="fixed  inset-0 bg-gray-900 bg-opacity-80 overflow-y-auto h-full w-full"></div>
			<div className="border border-4 border-midtone h-3/5 lg:h-4/5 fixed overscroll-none flex justify-center items-center opacity-1 top-20 inset-y-16 inset-x-12 drop-shadow-md md:inset-x-16 lg:inset-x-32 xl:inset-x-60 lg:top-20 ">
				<div className="bg-bgDark w-full h-full">
					<div id="additionalProjectInfoModal-grid" className="h-full grid grid-rows-[10%_5%_1fr_2.5%_5%] grid-cols-[75%_25%]">

						<div className="flex justify-center items-center bg-gradient-to-r from-midtone to-midtone/0 text-2xl font-bold lg:text-3xl">{name}</div>
						<div className="bg-transparent">
							<button id="additionalProjectInfoModal-close-button" className="p-4 float-right font-bold" onClick={closeAdditionalInfo}>X</button>
						</div>

						<div id="top-spacer" className="row-start-2 col-start-1 col-span-2 "></div>						
						<div id="project-info-section" className="overflow-y-scroll row-start-3 row-span-2 col-start-1 p-2 lg:p-7">
							<div id="goal-section" className=" text-2xl text-accent/70 p-4 border-b-4 border-b-primary/25 overflow-hidden lg:text-3xl"><span className="text-white text-3xl lg:text-4xl">Goal: </span>{short}</div>
							<div id="detailed-description" className="text-right text-base text-accent/70 p-4 pb-6 lg:text-2xl"><span className="text-white text-3xl lg:text-4xl">Description: <br/></span>
								<div dangerouslySetInnerHTML={{__html:description}}/>
							</div>
						</div>
						<div id="bottom-spacer" className="row-start-4 row-span-1 col-start-1 col-span-2 bg-inherit"></div>	
						<div id="footer-space" className="row-start-5 row-span-1 col-start-1 col-span-2 bg-midtone"></div>	
						<div id="things-i-learned-section" className="row-start-3 row-span-2 col-start-2 bg-gradient-to-b from-primary/25 to-primary/0 p-3 text-center">
							<h3 className="pb-5">Things I learned about:</h3>
							<ul>
								{concepts.map((concept,index)=>{
									return (
										<li className="text-sm text-center py-3 border-b-4 border-b-midtone/50">{concept}</li>
									)
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>)
}

//additionalProjectInfoModal-close-button