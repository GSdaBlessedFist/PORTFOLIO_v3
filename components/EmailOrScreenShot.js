import {useEffect,useState} from "react";

export default function EmailOrScreenShot(){
	
	function sendEmail(e){
		e.preventDefault();
		console.log("Sending...")
	// 	setIsOpen(true)

	// 	emailjs.sendForm(process.env.NEXT_PUBLIC_MAILJET_SERVICE_ID, process.env.NEXT_PUBLIC_MAILJET_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
	//       .then((result) => {
	//           console.log(result.text);
	//       }, (error) => {
	//           console.log(error.text);
	//       });
	}
	function showScreenShot(e){
		e.preventDefault();
		console.log("Showing...")
	}

	return (<>
		<svg id="EmailOrScreenShot-choices"
		    xmlns="http://www.w3.org/2000/svg"
		    xmlSpace="preserve"
		    width={209.2}
		    height={96.26}
		    viewBox="0 0 55.36 25.46"
		    className="relative -top-8 border-b-2 border-b-dsPrimary"
		  >
		    <path id="email-icon"
		      d="m-250.6-23.89 7.2 3.52 7.2-3.52zm14.9.25-7.7 3.81-7.7-3.81v9.46h15.4z"
		      style={{
		        fillRule: "evenodd",
		        strokeWidth: 0.216087,
		        fillOpacity: 1,
		      }}
		      transform="translate(258.4 31.76)"
		      className="fill-dsPrimary hover:fill-dsSecondary"
		      onClick={sendEmail}
		    />
		    <path id="screenshot-icon"
		      d="M-220.4-26.89v.67h10.1v-.67zm0 1.18v5h10.1v-5zm0 5.51v5.35h10.1v-5.35zm0 5.86v1.06h10.1v-1.06zm0 1.57v1.6h10.1v-1.6z"
		      style={{
		        fillRule: "evenodd",
		        strokeWidth: 0.2646,
		        fillOpacity: 1,
		      }}
		      transform="translate(258.4 31.76)"
		      className="fill-dsPrimary hover:fill-dsSecondary"
		      onClick={showScreenShot}
		    />
		  </svg>
	</>)
}


