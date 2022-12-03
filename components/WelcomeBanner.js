import {useState,useRef} from "react";
import gsap from "gsap";

export default function WelcomeBanner(){
	// const welcomeBannerContainer = document.querySelector("#welcome-banner-container");
	// const welcomeTextContainer = document.querySelector("#welcome-text-container");
	// const words = gsap.utils.toArray(".welcomeText");
	// const viewportOffsetLeft = -1050;


	// const tl = gsap.timeline({repeat:-1});
	// tl.timeScale(.5);
	// tl.from(welcomeBannerContainer,{autoAlpha:0,xPercent:100,duration:.55})
	//   .from(words,{filter:"blur(2px)",autoAlpha:0,x:550,duration:.55,skewX:'-45deg',ease:"power4.in",stagger:.05},"-=.35")
	//   .to(welcomeTextContainer,{x:-105,duration:.15,ease:"power1.out"})
	//   .to(welcomeTextContainer,{xPercent:6,duration:.125,ease:"power1.out",delay:.5})
	//   .to(words,{x:viewportOffsetLeft,skewX:'-45deg',duration:.125,stagger:.125})







	return (<>
		<div id="absolute top-4 flex justify-center items-center border-t-2px border-green-500 border-b-2px border-green-500">
		  <div id="absolute top-4 flex justify-center items-center text-yellow-500 text-2xl border-5px border-red-500 ">
		    <div className="font-anton">Welcome&nbsp</div>
		    <div className="font-anton">to&nbsp</div>
		    <div className="font-anton">my&nbsp</div>
		    <div className="font-anton">portfolio</div>
		  </div>
		</div>
	</>)
}