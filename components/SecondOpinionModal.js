import {useEffect,useState} from "react";
import {createPortal} from "react-dom";

const SecondOpinionModal = ({isOpen})=>{

	return isOpen
		? createPortal(<Content/>,
		  document.querySelector("#secondopinion-portal"))
		: null
}

const Content = ()=>{
	return (<>
		<div className="absolute flex justify-center items-center bg-blue-700 opacity-70 top-24 inset-12 backdrop-blur-xl">
			<table className="w-full h-full">
				<tr className="">
					<td className="h-4 p-5 text-center b">
						<h1 className="text-3xl so-font-main font-bold ">Thank you for asking..</h1>
					</td>
					<td className="flex justify-center items-center h-full p-5">
						<div className="text-xl so-font-main font-bold">X</div>
					</td>	
				</tr>
				<tr className="b">
					<td>
						<div className="text-5xl so-font-main">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eum placeat iure veritatis, illo quaerat error in debitis saepe a porro facilis officiis perferendis ipsa.
						</div>
					</td>
				</tr>
			</table>
		</div>
		
	</>)
}


export default SecondOpinionModal

