import {useState,useRef} from 'react'
import Image from 'next/image';
import Head from "next/head";
import emailjs from '@emailjs/browser';
//import DangerouslySmoothieModal from "../../components/DangerouslySmoothieModal";

const infoText = "We've gone down the list of fruits and found some great matches with some of our favorite liquors. Punch has never been this much good and bad for you. Enjoy Responsibly."

export default function DangerouslySmoothie(){
	const form = useRef();
	const [isOpen,setIsOpen] =useState(false);


	const formSubmission = function(e){
		e.preventDefault();
		setIsOpen(true)

		emailjs.sendForm(process.env.NEXT_PUBLIC_MAILJET_SERVICE_ID, process.env.NEXT_PUBLIC_MAILJET_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
	      .then((result) => {
	          console.log(result.text);
	      }, (error) => {
	          console.log(error.text);
	      });
	}

return (<>
<Head>
	<title>Dangerously Smooth - (DS)</title>
</Head>
{/*<DangerouslySmoothModal isOpen={isOpen} setIsOpen={setIsOpen}/>*/}
<div className="container mx-auto sm:my-16 xs:my-0 flex sm:py-auto flex-col justify-center items-center ">
	<div id="card" className="lg:w-5/6 xs:px-4 lg:p-0 lg:h-[620px] sm:my-28 lg:relative lg:top-4 xs:my-4 lg:grid-cols-[300px_1fr] xs:grid grid-cols-[.09%_99.91%] xs:grid-rows-[75px_100px_1fr_150px] lg:grid-rows-[75px_150px_150px_200px] sm:top-1/5 bg-white">
		<div id="hero" className="w-[100%] col-start-1 col-span-1 row-span-4 bg-gradient-to-b from-dsPrimary BLUE"></div>
		<div id="logo" className="col-start-2 col-span-1 flex justify-center items-center sm:h-full text-3xl text-center o">Danerously<br/> Smoothie</div>
		<div id="header" className="col-start-2 row-start-2 col-span-1 row-span-1 flex justify-center items-center xs:px-6 lg:py-3 ds-font-main xs:text-xl lg:text-3xl text-base text-center leading-tight o"><em>Enjoy the sinful pleasures of fruit juices and yak.</em></div>
		<div id="info" className="col-start-2 row-start-3 col-span-1 row-span-1 flex justify-center xs:px-5 py-0 xs:py-3 break-words lg:text-2xl indent-4 xs:text-center xs:leading-tight ds-font-minor o">
			{infoText}
		</div>
		<div id="form" className="col-start-2 row-start-4 col-span-1 row-span-1 flex flex-col justify-center items-center bg-dsSecondary/50">
			<input type="text" className="xs:w-3/5 lg:w-1/4 xs:w-2/4 mb-3 py-1 px-3 text-red-500 ds-font-main font-bold text-lg "/>
			<button className="w-1/2 p-1 bg-dsPrimary ds-font-main text-xl tracking-wide rounded-full border-0 border-b-4 border-dsDarkPrimary hover:bg-dsDarkPrimary b">
				Subscribe and enjoy!<span className="after:block after:w-[35px] after:h-[35px] after:rounded-full after:absolute after:-inset-3 after:bg-dsMinor relative inline-block left-8 sm:left-12 md:left-24 lg:left-12 xl:left-32" ></span>
			</button>
		</div>
	</div>
</div>

</>)

}