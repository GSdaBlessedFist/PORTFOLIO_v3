//WelcomeBanner with text characters instead of SVG's
// keyframes version
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

export default function WelcomeBanner() {
  

  const welcomeTextsRef = useRef([]);
  welcomeTextsRef.current = [];

  function addToWelcomeTextRefsArray(char) {
    if (char && !welcomeTextsRef.current.includes(char)) {
      welcomeTextsRef.current.push(char);
    }
  }
  useEffect(() => {

    // const tl = gsap.timeline({repeat:-1,repeatDelay:2})
    // var random = gsap.utils.random(-50, 50, true);
    // tl.from(welcomeTextsRef.current,{x:-300,stagger:{ from:"end", amount:.75, ease: "power2"}})
    // tl.to(welcomeTextsRef.current,{opacity:1,duration:.85,stagger:{  amount:.85, ease: "power4.in"}},"<")
    // tl.to(welcomeTextsRef.current,{opacity:0,x:20,y:random,duration:1,stagger:{ from:"start",amount:1,ease:"power4.out"},delay:3.5})
  })    
  

    return (
    <>
      <div className="absolute 2xl:w-1/4 2xl:h-[100px] 2xl:top-[660px] xl:top-[665px] lg:top-[620px] md:top-[570px] sm:top-[525px] 2xl:left-[775px] xl:left-[650px] lg:left-[510px] md:left-[360px] sm:left-[280px]">
        <div id="welcomeBannerContainer" className="container">
          <div id="welcomeText" className="flex font-anton xl:text-5xl lg:text-[42px] md:text-4xl sm:text-3xl text-midtone">
            <div id="character-1" ref={addToWelcomeTextRefsArray} className="welcome-letter ">W</div>
            <div id="character-2" ref={addToWelcomeTextRefsArray} className="welcome-letter ">e</div>
            <div id="character-3" ref={addToWelcomeTextRefsArray} className="welcome-letter ">l</div>
            <div id="character-4" ref={addToWelcomeTextRefsArray} className="welcome-letter ">c</div>
            <div id="character-5" ref={addToWelcomeTextRefsArray} className="welcome-letter ">o</div>
            <div id="character-6" ref={addToWelcomeTextRefsArray} className="welcome-letter ">m</div>
            <div id="character-7" ref={addToWelcomeTextRefsArray} className="welcome-letter  mr-3">e</div>
            <div id="character-8" ref={addToWelcomeTextRefsArray} className="welcome-letter "> </div>
            <div id="character-9" ref={addToWelcomeTextRefsArray} className="welcome-letter ">t</div>
            <div id="character-10" ref={addToWelcomeTextRefsArray} className="welcome-letter  mr-3">o</div>
            <div id="character-11" ref={addToWelcomeTextRefsArray} className="welcome-letter "> </div>
            <div id="character-12" ref={addToWelcomeTextRefsArray} className="welcome-letter ">m</div>
            <div id="character-13" ref={addToWelcomeTextRefsArray} className="welcome-letter  mr-3">y</div>
            <div id="character-14" ref={addToWelcomeTextRefsArray} className="welcome-letter "> </div>
            <div id="character-15" ref={addToWelcomeTextRefsArray} className="welcome-letter ">p</div>
            <div id="character-16" ref={addToWelcomeTextRefsArray} className="welcome-letter ">o</div>
            <div id="character-17" ref={addToWelcomeTextRefsArray} className="welcome-letter ">r</div>
            <div id="character-18" ref={addToWelcomeTextRefsArray} className="welcome-letter ">f</div>
            <div id="character-19" ref={addToWelcomeTextRefsArray} className="welcome-letter ">o</div>
            <div id="character-20" ref={addToWelcomeTextRefsArray} className="welcome-letter ">l</div>
            <div id="character-21" ref={addToWelcomeTextRefsArray} className="welcome-letter ">i</div>
            <div id="character-22" ref={addToWelcomeTextRefsArray} className="welcome-letter ">o</div>
            
          </div>

        </div>
      </div>
    </>
  )
}
