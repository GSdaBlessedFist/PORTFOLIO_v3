import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

export default function WelcomeBanner() {
  const welcomeBannerContainer = useRef();
  const viewportOffsetLeft = "1050"; //-1050

  
  const [isHidden,setIsHidden] = useState();
  const welcomeTextsRef = useRef([]);
  welcomeTextsRef.current = [];

  function addToWelcomeTextRefsArray(word) {
    if (word && !welcomeTextsRef.current.includes(word)) {
      welcomeTextsRef.current.push(word);
    }
  }
  const staggerOptions = {
        from: "start",
        amount: 0.4,
        ease: "power4.in",
      	delay:.25
    };

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1 });
    timeline.timeScale(1.25);
    timeline.to(welcomeTextsRef.current, {
      x: -200,
      duration: 0.75,
      stagger:staggerOptions
  	})
    .to(welcomeTextsRef.current,{opacity:1,stagger:.1,duration:1},"-=.5")
    .to(welcomeTextsRef.current,{fill:"#15151E",duration:1.5,delay:1.5})
    .to(welcomeTextsRef.current,{stroke:"#464660",strokeWidth:.35,duration:1},"<")
    .to(welcomeTextsRef.current,{y:gsap.utils.random(11,150),opacity:0,duration:1,stagger:{...staggerOptions,duration:.5},delay:1.5})
  },[]);

  //height="90.01"
  return (
    <>
      <div className="absolute 2xl:top-[600px]">
        <svg
          id="welcome-banner"
          ref={welcomeBannerContainer}
          width="1520"
          height="150.01"
          viewBox="0 0 1520 90.01"
          version="1.1"
          className="scale-125"
          
        >
          <defs id="defs2" />
          <g transform="translate(1113,-970.5)">
            <g
              id="welcome-text"
              transform="matrix(3.1,0,0,3.1,-1037,320.5)"
              style={{ strokeWidth: "0.322576" }}
            >
              <g id="welcomeText-welcome" style={{ strokeWidth: "0.322576" }}>
                <path
                  opacity="0"
                  ref={addToWelcomeTextRefsArray}
                  d="m 255.9,230.4 -1.5,-13.7 h 2.9 l 0.8,8.7 0.8,-8.7 h 2.7 l 0.8,8.7 0.9,-8.7 h 2.9 l -1.7,13.7 H 261 l -0.7,-6.6 -0.8,6.6 z"
                  style={{
                    fontSize: "16.5495px",
                    lineHeight: "1.25",
                    fontFamily: "Anton",
                    letterSpacing: "0px",
                    wordSpacing: "0px",
                    fill:"#F1E9E5",
                    strokeWidth: "0.322747"
                  }}
                  id="welcome-w"
                />
                <path
                  opacity="0"
                  ref={addToWelcomeTextRefsArray}
                  d="m 270.5,230.5 q -1.3,0 -2.2,-0.5 -0.8,-0.4 -1.1,-1.4 -0.3,-0.8 -0.3,-2.1 v -4.6 q 0,-1.7 0.9,-2.5 1,-0.9 2.8,-0.9 3.6,0 3.6,3.4 v 0.8 q 0,1.6 0,2.1 h -4.3 v 2.2 q 0,0.4 0,0.7 0,0.3 0.2,0.5 0.1,0.2 0.4,0.2 0.5,0 0.6,-0.4 0.1,-0.4 0.1,-1 v -1.2 h 3 v 0.7 q 0,1.4 -0.3,2.2 -0.4,0.9 -1.2,1.4 -0.9,0.4 -2.2,0.4 z m -0.7,-7.1 h 1.4 v -1.6 q 0,-0.6 -0.1,-0.9 -0.2,-0.3 -0.5,-0.3 -0.4,0 -0.6,0.3 -0.2,0.3 -0.2,0.9 z"
                  style={{
                    fontSize: "16.5495px",
                    lineHeight: "1.25",
                    fontFamily: "Anton",
                    letterSpacing: "0px",
                    wordSpacing: "0px",
                    fill: "#F1E9E5",
                    strokeWidth: "0.322747"
                  }}
                  id="welcome-e1"
                />
                <path
                  opacity="0"
                  ref={addToWelcomeTextRefsArray}
                  d="m 275.3,230.4 v -13.7 h 3.1 v 13.7 z"
                  style={{
                    fontSize: "16.5495px",
                    lineHeight: "1.25",
                    fontFamily: "Anton",
                    letterSpacing: "0px",
                    wordSpacing: "0px",
                    fill: "#F1E9E5",
                    strokeWidth: "0.322747"
                  }}
                  id="welcome-l"
                />
                <path
                  opacity="0"
                  ref={addToWelcomeTextRefsArray}
                  d="m 283.3,230.5 q -2.1,0 -3,-1 -0.8,-1 -0.8,-3 v -3.6 q 0,-1.4 0.3,-2.4 0.3,-0.9 1.1,-1.4 0.9,-0.6 2.4,-0.6 1.1,0 1.8,0.4 0.8,0.4 1.3,0.9 0.5,0.7 0.5,1.7 v 1.8 h -3.1 v -1.6 q 0,-0.4 -0.1,-0.7 -0.1,-0.3 -0.5,-0.3 -0.7,0 -0.7,1 v 5.7 q 0,0.3 0.1,0.7 0.2,0.3 0.6,0.3 0.3,0 0.5,-0.3 0.1,-0.3 0.1,-0.7 v -2 h 3.1 v 2 q 0,1 -0.5,1.7 -0.4,0.7 -1.2,1 -0.8,0.4 -1.9,0.4 z"
                  style={{
                    fontSize: "16.5495px",
                    lineHeight: "1.25",
                    fontFamily: "Anton",
                    letterSpacing: "0px",
                    wordSpacing: "0px",
                    fill: "#F1E9E5",
                    strokeWidth: "0.322747"
                  }}
                  id="welcome-c"
                />
                <path
                  opacity="0"
                  ref={addToWelcomeTextRefsArray}
                  d="m 291.6,230.5 q -3.7,0 -3.7,-3.6 v -4.7 q 0,-1.7 0.9,-2.6 1,-1.1 2.8,-1.1 1.7,0 2.8,1.1 0.9,0.9 0.9,2.6 v 4.7 q 0,3.6 -3.7,3.6 z m 0,-2.1 q 0.4,0 0.5,-0.3 0.2,-0.2 0.2,-0.6 v -5.8 q 0,-1 -0.7,-1 -0.7,0 -0.7,1 v 5.8 q 0,0.4 0.2,0.6 0.1,0.3 0.5,0.3 z"
                  style={{
                    fontSize: "16.5495px",
                    lineHeight: "1.25",
                    fontFamily: "Anton",
                    letterSpacing: "0px",
                    wordSpacing: "0px",
                    fill: "#F1E9E5",
                    strokeWidth: "0.322747"
                  }}
                  id="welcome-o"
                />
                <path
                  opacity="0"
                  ref={addToWelcomeTextRefsArray}
                  d="m 296.4,230.4 v -11.7 h 2.9 v 1.3 q 0.2,-0.7 0.8,-1.1 0.5,-0.4 1.4,-0.4 0.7,0 1.3,0.4 0.5,0.3 0.7,0.8 0.4,-0.5 0.8,-0.8 0.5,-0.4 1.4,-0.4 1,0 1.5,0.5 0.6,0.4 0.8,1.1 0.2,0.7 0.2,1.7 v 8.6 h -3 v -8.6 q 0,-1.2 -0.6,-1.2 -0.3,0 -0.5,0.2 -0.1,0.3 -0.2,0.6 -0.1,0.3 -0.1,0.6 v 8.4 h -2.9 v -8.6 q 0,-0.4 -0.1,-0.8 -0.1,-0.3 -0.5,-0.3 -0.3,0 -0.5,0.2 -0.3,0.2 -0.3,0.6 -0.1,0.3 -0.1,0.6 v 8.3 z"
                  style={{
                    fontSize: "16.5495px",
                    lineHeight: "1.25",
                    fontFamily: "Anton",
                    letterSpacing: "0px",
                    wordSpacing: "0px",
                    fill: "#F1E9E5",
                    strokeWidth: "0.322747"
                  }}
                  id="welcome-m"
                />
                <path
                  opacity="0"
                  ref={addToWelcomeTextRefsArray}
                  d="m 312.9,230.5 q -1.4,0 -2.1,-0.5 -0.8,-0.4 -1.1,-1.4 -0.4,-0.8 -0.4,-2.1 v -4.6 q 0,-1.7 1,-2.5 1,-0.9 2.8,-0.9 3.6,0 3.6,3.4 v 0.8 q 0,1.6 -0.1,2.1 h -4.3 v 2.2 q 0,0.4 0.1,0.7 0,0.3 0.2,0.5 0.1,0.2 0.4,0.2 0.5,0 0.6,-0.4 0.1,-0.4 0.1,-1 v -1.2 h 3 v 0.7 q 0,1.4 -0.4,2.2 -0.3,0.9 -1.1,1.4 -0.9,0.4 -2.3,0.4 z m -0.6,-7.1 h 1.4 v -1.6 q 0,-0.6 -0.2,-0.9 -0.1,-0.3 -0.4,-0.3 -0.4,0 -0.6,0.3 -0.2,0.3 -0.2,0.9 z"
                  style={{
                    fontSize: "16.5495px",
                    lineHeight: "1.25",
                    fontFamily: "Anton",
                    letterSpacing: "0px",
                    wordSpacing: "0px",
                    fill: "#F1E9E5",
                    strokeWidth: "0.322747"
                  }}
                  id="welcome-e2"
                />
              </g>
              <g id="welcomeText-to" style={{ strokeWidth: "0.322576" }}>
                <path
                  opacity="0"
                  ref={addToWelcomeTextRefsArray}
                  d="m 324.4,230.5 q -1.3,0 -1.7,-0.5 -0.4,-0.5 -0.4,-1.5 v -7.2 h -0.8 v -2.2 h 0.8 v -2.4 h 2.9 v 2.4 h 0.8 v 2.2 h -0.8 v 6.6 q 0,0.3 0.1,0.5 0.1,0.1 0.4,0.1 0.2,0 0.3,-0.1 v 1.9 q -0.1,0 -0.6,0.1 -0.5,0.1 -1,0.1 z"
                  style={{
                    fontSize: "16.5495px",
                    lineHeight: "1.25",
                    fontFamily: "Anton",
                    letterSpacing: "0px",
                    wordSpacing: "0px",
                    fill: "#F1E9E5",
                    strokeWidth: "0.322747"
                  }}
                  id="to-t"
                />
                <path
                  opacity="0"
                  ref={addToWelcomeTextRefsArray}
                  d="m 330.7,230.5 q -3.7,0 -3.7,-3.6 v -4.7 q 0,-1.7 0.9,-2.6 1,-1.1 2.8,-1.1 1.7,0 2.7,1.1 1,0.9 1,2.6 v 4.7 q 0,3.6 -3.7,3.6 z m 0,-2.1 q 0.3,0 0.5,-0.3 0.2,-0.2 0.2,-0.6 v -5.8 q 0,-1 -0.7,-1 -0.8,0 -0.8,1 v 5.8 q 0,0.4 0.3,0.6 0.1,0.3 0.5,0.3 z"
                  style={{
                    fontSize: "16.5495px",
                    lineHeight: "1.25",
                    fontFamily: "Anton",
                    letterSpacing: "0px",
                    wordSpacing: "0px",
                    fill: "#F1E9E5",
                    strokeWidth: "0.322747"
                  }}
                  id="to-o"
                />
              </g>
              <g id="welcomeText-my" style={{ strokeWidth: "0.322576" }}>
                <path
                  opacity="0"
                  ref={addToWelcomeTextRefsArray}
                  d="m 339.6,230.4 v -11.7 h 2.9 v 1.3 q 0.2,-0.7 0.6,-1.1 0.5,-0.4 1.4,-0.4 0.8,0 1.4,0.4 0.5,0.3 0.7,0.8 0.3,-0.5 0.8,-0.8 0.4,-0.4 1.3,-0.4 1.1,0 1.6,0.5 0.5,0.4 0.8,1.1 0.3,0.7 0.3,1.7 v 8.6 h -3 v -8.6 q 0,-1.2 -0.7,-1.2 -0.3,0 -0.5,0.2 -0.2,0.3 -0.2,0.6 -0.1,0.3 -0.1,0.6 v 8.4 h -3 v -8.6 q 0,-0.4 -0.1,-0.8 -0.1,-0.3 -0.4,-0.3 -0.4,0 -0.5,0.2 -0.2,0.2 -0.3,0.6 -0.1,0.3 -0.1,0.6 v 8.3 z"
                  style={{
                    fontSize: "16.5495px",
                    lineHeight: "1.25",
                    fontFamily: "Anton",
                    letterSpacing: "0px",
                    wordSpacing: "0px",
                    fill: "#F1E9E5",
                    strokeWidth: "0.322747"
                  }}
                  id="my-m"
                />
                <path
                  opacity="0"
                  ref={addToWelcomeTextRefsArray}
                  d="m 352.3,232.3 v -1.7 h 1.4 q 0.3,0 0.3,-0.2 0,-0.1 -0.1,-0.3 l -1.8,-11.4 h 2.8 l 0.8,8.6 1,-8.6 h 2.9 l -2.4,12.3 q -0.1,0.6 -0.4,1 -0.4,0.3 -1.2,0.3 z"
                  style={{
                    fontSize: "16.5495px",
                    lineHeight: "1.25",
                    fontFamily: "Anton",
                    letterSpacing: "0px",
                    wordSpacing: "0px",
                    fill: "#F1E9E5",
                    strokeWidth: "0.322747"
                  }}
                  id="my-y"
                />
              </g>
              <g id="welcomeText-portfolio" style={{ strokeWidth: "0.322576" }}>
                <path
                  opacity="0"
                  ref={addToWelcomeTextRefsArray}
                  d="m 364.4,232.3 v -13.6 h 3.1 v 1.2 q 0.2,-0.6 0.7,-1 0.5,-0.4 1.4,-0.4 1.2,0 1.7,0.9 0.5,0.8 0.5,2.2 v 5.7 q 0,1 -0.3,1.6 -0.2,0.8 -0.8,1.2 -0.5,0.4 -1.5,0.4 -1.2,0 -1.7,-1.4 v 3.2 z m 3.7,-3.9 q 0.5,0 0.6,-0.5 0.1,-0.4 0.1,-1.1 v -4.5 q 0,-0.7 -0.1,-1.1 -0.1,-0.5 -0.6,-0.5 -0.4,0 -0.5,0.5 -0.1,0.4 -0.1,1.1 v 4.5 q 0,0.7 0.1,1.1 0.1,0.5 0.5,0.5 z"
                  style={{
                    fontSize: "16.5495px",
                    lineHeight: "1.25",
                    fontFamily: "Anton",
                    letterSpacing: "0px",
                    wordSpacing: "0px",
                    fill: "#F1E9E5",
                    strokeWidth: "0.322747"
                  }}
                  id="portfolio-p"
                />
                <path
                  opacity="0"
                  ref={addToWelcomeTextRefsArray}
                  d="m 376.6,230.5 q -3.7,0 -3.7,-3.6 v -4.7 q 0,-1.7 1,-2.6 0.9,-1.1 2.7,-1.1 1.7,0 2.8,1.1 1,0.9 1,2.6 v 4.7 q 0,3.6 -3.8,3.6 z m 0,-2.1 q 0.4,0 0.5,-0.3 0.2,-0.2 0.2,-0.6 v -5.8 q 0,-1 -0.7,-1 -0.6,0 -0.6,1 v 5.8 q 0,0.4 0.1,0.6 0.2,0.3 0.5,0.3 z"
                  style={{
                    fontSize: "16.5495px",
                    lineHeight: "1.25",
                    fontFamily: "Anton",
                    letterSpacing: "0px",
                    wordSpacing: "0px",
                    fill: "#F1E9E5",
                    strokeWidth: "0.322747"
                  }}
                  id="portfolio-o1"
                />
                <path
                  opacity="0"
                  ref={addToWelcomeTextRefsArray}
                  d="m 381.4,230.4 v -11.7 h 3.1 v 1.2 q 0.3,-0.6 0.8,-1 0.5,-0.4 1.4,-0.4 v 2.3 q -0.4,0 -0.9,0.1 -0.5,0.1 -0.9,0.2 -0.4,0.2 -0.4,0.3 v 9 z"
                  style={{
                    fontSize: "16.5495px",
                    lineHeight: "1.25",
                    fontFamily: "Anton",
                    letterSpacing: "0px",
                    wordSpacing: "0px",
                    fill: "#F1E9E5",
                    strokeWidth: "0.322747"
                  }}
                  id="portfolio-r"
                />
                <path
                  opacity="0"
                  ref={addToWelcomeTextRefsArray}
                  d="m 390,230.5 q -1.2,0 -1.6,-0.5 -0.4,-0.5 -0.4,-1.5 v -7.2 h -1 v -2.2 h 1 v -2.4 h 2.9 v 2.4 h 0.8 v 2.2 h -0.8 v 6.6 q 0,0.3 0.1,0.5 0.1,0.1 0.3,0.1 0.2,0 0.4,-0.1 v 1.9 q -0.1,0 -0.6,0.1 -0.6,0.1 -1.1,0.1 z"
                  style={{
                    fontSize: "16.5495px",
                    lineHeight: "1.25",
                    fontFamily: "Anton",
                    letterSpacing: "0px",
                    wordSpacing: "0px",
                    fill: "#F1E9E5",
                    strokeWidth: "0.322747"
                  }}
                  id="portfolio-t"
                />
                <path
                  opacity="0"
                  ref={addToWelcomeTextRefsArray}
                  d="m 392.9,230.4 v -9.1 h -0.5 v -2.1 h 0.5 v -0.8 q 0,-1.9 2,-1.9 1,0 1.5,0.2 v 1.8 q -0.2,-0.1 -0.2,-0.1 -0.3,0 -0.3,0.2 -0.1,0.2 -0.1,0.5 v 0.1 h 0.6 v 2.2 h -0.5 v 9 z"
                  style={{
                    fontSize: "16.5495px",
                    lineHeight: "1.25",
                    fontFamily: "Anton",
                    letterSpacing: "0px",
                    wordSpacing: "0px",
                    fill: "#F1E9E5",
                    strokeWidth: "0.322747"
                  }}
                  id="portfolio-f"
                />
                <path
                  opacity="0"
                  ref={addToWelcomeTextRefsArray}
                  d="m 401.1,230.5 q -3.7,0 -3.7,-3.6 v -4.7 q 0,-1.7 0.9,-2.6 1,-1.1 2.8,-1.1 1.7,0 2.7,1.1 1,0.9 1,2.6 v 4.7 q 0,3.6 -3.7,3.6 z m 0,-2.1 q 0.3,0 0.5,-0.3 0.2,-0.2 0.2,-0.6 v -5.8 q 0,-1 -0.7,-1 -0.7,0 -0.7,1 v 5.8 q 0,0.4 0.2,0.6 0.1,0.3 0.5,0.3 z"
                  style={{
                    fontSize: "16.5495px",
                    lineHeight: "1.25",
                    fontFamily: "Anton",
                    letterSpacing: "0px",
                    wordSpacing: "0px",
                    fill: "#F1E9E5",
                    strokeWidth: "0.322747"
                  }}
                  id="portfolio-o2"
                />
                <path
                  opacity="0"
                  ref={addToWelcomeTextRefsArray}
                  d="m 405.9,230.4 v -13.7 h 3 v 13.7 z"
                  style={{
                    fontSize: "16.5495px",
                    lineHeight: "1.25",
                    fontFamily: "Anton",
                    letterSpacing: "0px",
                    wordSpacing: "0px",
                    fill: "#F1E9E5",
                    strokeWidth: "0.322747"
                  }}
                  id="portfolio-l"
                />
                <path
                  opacity="0"
                  ref={addToWelcomeTextRefsArray}
                  d="m 410.2,217.9 v -2.3 h 3 v 2.3 z m 0,12.5 v -11.7 h 3 v 11.7 z"
                  style={{
                    fontSize: "16.5495px",
                    lineHeight: "1.25",
                    fontFamily: "Anton",
                    letterSpacing: "0px",
                    wordSpacing: "0px",
                    fill: "#F1E9E5",
                    strokeWidth: "0.322747"
                  }}
                  id="portfolio-i"
                />
                <path
                  opacity="0"
                  ref={addToWelcomeTextRefsArray}
                  d="m 417.9,230.5 q -3.7,0 -3.7,-3.6 v -4.7 q 0,-1.7 1.1,-2.6 0.9,-1.1 2.6,-1.1 1.8,0 2.8,1.1 1.1,0.9 1.1,2.6 v 4.7 q 0,3.6 -3.9,3.6 z m 0,-2.1 q 0.5,0 0.6,-0.3 0.2,-0.2 0.2,-0.6 v -5.8 q 0,-1 -0.8,-1 -0.7,0 -0.7,1 v 5.8 q 0,0.4 0.2,0.6 0.2,0.3 0.5,0.3 z"
                  style={{
                    fontSize: "16.5495px",
                    lineHeight: "1.25",
                    fontFamily: "Anton",
                    letterSpacing: "0px",
                    wordSpacing: "0px",
                    fill: "#F1E9E5",
                    strokeWidth: "0.322747"
                  }}
                  id="portfolio-o3"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </>
  );
}
