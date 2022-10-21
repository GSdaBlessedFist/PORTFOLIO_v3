import {useRef,useEffect} from "react";
import Image from "next/image";
import step1 from "../assets/theProgression-icon(step-1).png";
import step2 from "../assets/theProgression-icon(step-2).png";
import step3 from "../assets/theProgression-icon(step-3).png";
import {gsap} from "gsap";

export default function Preloader() {


	const dotRef = useRef();
	const ringRef = useRef();
	const finalStepRef = useRef();

	const tl = gsap.timeline({duration:1});
	

	useEffect(()=>{
		
		tl.to(dotRef.current,{opacity:1,scale:1.25})
		  .to(dotRef.current,{opacity:0,scale:1.75})
		  .set(dotRef.current,{display:"hidden"})

	})

	return (
			<div className="flex justify-center items-center absolute top-0 left-0 bottom-0 right-0 h-full mx-auto  BLUE w-[300px]  o">
				<div  className="opacity-0 absolute mx-auto  b">
					<Image src={step1} width={300} height={300} alt="dot"/>
					
				</div>
				<div ref={ringRef} className="opacity-0 absolute mx-auto b">
					<Image src={step2} width={300} height={300} alt="ring"/>
				</div>				
				<div ref={finalStepRef} className="opacity-0 absolute mx-auto b">
					<Image src={step3} width={300} height={300} alt="final step"/>
				</div>					
				
			</div>
	);
}



