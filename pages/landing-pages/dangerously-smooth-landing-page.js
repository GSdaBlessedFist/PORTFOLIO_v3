import {useState,useRef} from 'react'
import Image from 'next/image';
import Head from "next/head";
import emailjs from '@emailjs/browser';
import DangerouslySmoothModal from "../../components/DangerouslySmoothModal";
// logo: https://i.ibb.co/khgkw4x/logo-black.png
// logo: https://i.ibb.co/8D4YYDN/logo-white.png
// hero: https://i.ibb.co/5j5v8sJ/hero-composition.png
// hero 300x495
const infoText = "We've gone down the list of fruits and found some great matches with some of our favorite liquors. Punch has never been this much good and bad for you. Enjoy Responsibly."

export default function DangerouslySmooth(){
	const form = useRef();
	//const contactEmail = useRef(); 
	const [isOpen,setIsOpen] =useState(false);
	const [email,setEmail]= useState();

	const updateEmail = function(e){
		setEmail(e.target.value);
		// console.log(email + ": Make sure to validate");
	}

	const presentThankyouModal = function(){
		setIsOpen(true);
	}


return (<>
<Head>
	<title>Dangerously Smooth - (DS)</title>
</Head>
<DangerouslySmoothModal isOpen={isOpen} setIsOpen={setIsOpen} email={email}/>
<div className="container mx-auto sm:my-16 xs:my-0 flex sm:py-0 lg:py-12 flex-col justify-center items-center bg-dsDarkPrimary ">
	
{/*<div id="card" className="BLUE relative  lg:-translate-y-24 md:-translate-y-[45%] lg:w-5/6 ** xs:pb-8 lg:p-0 xs:h-[430px] d:h-[800px]  sm:my-28  lg:top-4 xs:my-8  lg:grid-cols-[300px_1fr] xs:grid grid-cols-[.09%_99.91%] xs:grid-rows-[1fr_70px_150px_150px] lg:grid-rows-[75px_1fr_200px_1fr]  sm:top-1/5 bg-gradient-to-b from-dsPrimary to-dsDarkPrimary">*/}
<div id="card" className="relative lg:w-5/6  xs:px-4 sm:my-28 lg:top-0 lg:bottom-4 xs:my-8 sm:top-1/5 lg:grid-cols-[300px_1fr] xs:grid grid-cols-[.09%_99.91%] xs:grid-rows-[1fr_70px_140px_1fr] lg:grid-rows-[138px_1fr_200px_1fr] bg-gradient-to-b from-dsPrimary to-dsDarkPrimary pb-4 border-b-2 border-b-dsAccent/25 drop-shadow-[0_15px_25px_#f3c55744]">
		<div id="hero" className="overflow-hidden w-[100%] col-start-1 col-span-1 row-span-4 bg-gradient-to-b from-dsPrimary ">
			<Image src="https://i.ibb.co/5j5v8sJ/hero-composition.png" width="300" height="495" layout="fixed" alt="a bottle,shot glass, and slice of something" />
		</div>
		<div id="logo" className=" col-start-2 col-span-1 flex justify-center items-center sm:h-full text-3xl text-center xs:p-1 ">
			<Image src="https://i.ibb.co/8D4YYDN/logo-white.png" width="368" height="128" alt="Dangerously smooth logo" className="xl:p-4"/>
		</div>
		<div id="header" className="col-start-2 row-start-2 col-span-1 row-span-1 flex justify-center items-center xs:px-6  lg:py-3 ds-font-accent text-dsSecondary xs:text-xl lg:text-3xl text-base text-center leading-tight"><em>Enjoy the sinful pleasures of fruit juices and yak.</em></div>
		<div id="info" className=" col-start-2 row-start-3 col-span-1 row-span-1 flex  justify-center xs:px-6 py-0 xs:py-3 break-words md:text-xl lg:text-2xl indent-4 xs:text-center xs:leading-tight ds-font-minor ">
			{infoText}
		</div>
		<div id="form" className="col-start-2 row-start-4 col-span-1 row-span-1 flex flex-col justify-start lg:justify-center items-center ">
			<input type="email" name="contact-email" onChange={updateEmail} className="z-20 xs:w-3/5 lg:w-1/4 xs:w-2/4 mb-3 py-1 px-3 text-dsAccent ds-font-main font-bold text-lg text-center bg-dsSecondary/75 rounded-full focus:border-dsAccent" required={true}/>
			<button type="submit" onClick={presentThankyouModal} className="z-20 w-1/2  p-1 bg-dsPrimary font-[bangers] text-xl tracking-wide rounded-full border-2 border-dsAccent hover:bg-dsDarkPrimary">
				Subscribe and enjoy!<span className="after:block after:absolute inline-block after:w-[35px] after:h-[35px] after:rounded-full after:-inset-3 after:bg-dsAccent relative xs:left-8 after:sm:left-4 after:md:left-12 after:lg:left-0 after:xl:left-16 " ></span>
			</button>
		</div>
	</div>
</div>

</>)

}