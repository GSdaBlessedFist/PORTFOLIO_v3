//WelcomeBanner with text characters instead of SVG's
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

export default function WelcomeBanner() {
  const welcomeBannerContainer = useRef();
  const viewportOffsetLeft = "1050"; //-1050

  const welcomeTextsRef = useRef([]);
  welcomeTextsRef.current = [];

  function addToWelcomeTextRefsArray(char) {
    if (char && !welcomeTextsRef.current.includes(char)) {
      welcomeTextsRef.current.push(char);
    }
  }
  

  const greeting = "Welcome to my porfolio";
  const greetArr = greeting.split("");
  //[id^='character-']
  let characters = gsap.utils.toArray('[id^="character-"]');

  useEffect(() => {
    console.log(characters)
    const timeline = gsap.timeline({ repeat: -1 });
    timeline.from('[id^="character-"]',{opacity:0,duration:3})
    //timeline.from(welcomeTextsRef,{x:"-50",duration:1})
  },[]);

  //height="90.01"
  //{greetArr.map((character,index)=>(<div id={`character-${index}`} className="inline">{character}</div>))}
  return (
    <>
      <div className="absolute 2xl:w-1/4 2xl:h-[100px] 2xl:top-[690px] 2xl:left-[978px]">
        <div id="welcomeBannerContainer" className="container">
          <div id="welcomeText" className="BLUE  font-anton 2xl:text-5xl text-midtone">
            {greetArr.map((letter,index)=>(<div id={`character-${index}`} key={index} ref={addToWelcomeTextRefsArray} className="inline">{letter}</div>))}
            
          </div>

        </div>
      </div>
    </>
  );
}
