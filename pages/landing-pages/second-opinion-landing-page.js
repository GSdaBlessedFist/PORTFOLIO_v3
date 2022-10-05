import {useState,useRef} from 'react'
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import SecondOpinionModal from "../../components/SecondOpinionModal";

export default function SecondOpinion(){
	const form = useRef();
	const [isOpen,setIsOpen] =useState(false);

	const formSubmission = function(e){
		e.preventDefault();
		setIsOpen(true)

		emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_SECONDOPINION_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY)
	      .then((result) => {
	          console.log(result.text);
	      }, (error) => {
	          console.log(error.text);
	      });
	}

return (<>
<SecondOpinionModal isOpen={isOpen} setIsOpen={setIsOpen}/>

<div className="container flex justify-center items-center  my-0 mx-auto border-box lg:py-20 lg:bg-transparent  lg:mx-auto ">
	<div className="grid grid-rows-[225px_120px_1fr_1fr] bg-[#070709ff] so-border lg:bg-[#070709ff] lg:grid-cols-[348px_400px_340px] lg:grid-rows-4  lg:h-[644px] ">
		<div id="logo-row" className="grid grid-col-1 grid-rows-[99.9%_.1%] border-r-2 overflow-hidden lg:grid-rows-[.1%_99.9%] lg:row-span-4 " >
			<Image src="/images/the_second_opinion_grp-logo(simple).png" className="row-start-1 row-span-1 object-contain scale-90 lg:hidden lg:opacity-0" width={175} height={115} alt={"a screenshot"}/>
			<Image src="/images/second-opinion-lunar.png" className="row-start-2 row-span-1 opacity-0 lg:row-start-1 lg:row-span-1 lg:object-contain lg:inline lg:opacity-100" width={348} height={644} alt="lunar curvature" />
		</div>
		<div id="header-row" className="container flex justify-center items-center " >
			<div id="headerText-container" className="container w-1/2 md:w-3/4 lg:w-full" >
				<div id="header-text" className="text-3xl so-font-main  text-center font-bold lg:relative lg:top-4">
					Not sure if <span className="text-[#8fbbff]">your</span> design is working?
				</div>
			</div>
		</div>
		<div id="form-row" className="container flex justify-center items-center lg:pt-0 lg:row-span-2 ">
			<form ref={form} action="" className="w-1/2 text-xl pr-5 lg:w-full lg:pr-8 ">
				<div id="form-topSection" className="lg:relative lg:-top-12">
					<div className="py-2 grid grid-cols-[auto_192px] md:grid-cols-[auto_220px] lg:grid-cols-[auto_192px]  ">
						<div id="url-label" className="so-font-main font-bold text-right pr-4 md:pr-2" required>http:// </div>
						<input id="url-input" className="so-font-main text-base text-[#8fbbff] text-left pl-2 bg-slate-700 placeholder:text-[#62799c] rounded-full md:w-full" type="url" name="url" placeholder="www.yourSite.com" />
					</div>
					<div className="py-2 grid grid-cols-[auto_192px] md:grid-cols-[auto_220px] lg:grid-cols-[auto_192px] ">
						<div id="email-label" className="so-font-main font-bold text-right pr-4 md:pr-2" required>email:</div>
						<input id="email-input" className="so-font-main text-base text-[#8fbbff] text-center bg-slate-700 placeholder:text-[#62799c] rounded-full md:w-full" type="email"  name="email" placeholder="youremail@email.com" />
					</div>
					<div className="py-2 grid grid-cols-[auto_192px] md:grid-cols-[auto_220px] lg:grid-cols-[auto_192px] ">
						<div id="contact-label" className="so-font-main font-bold text-right pr-4 md:pr-2" required>contact:</div>
						<input id="contact-input" className="so-font-main text-base text-[#8fbbff] text-center bg-slate-700 placeholder:text-[#62799c] rounded-full md:w-full" type="text"  name="contact" placeholder="Who will be talking to?" />
					</div>
				</div>
				<div id="form-buttonSection" className="flex justify-center pt-4 pl-4 lg:relative lg:-top-8">
					<button className="bg-blue-400 py-4 px-6 rounded-full so-font-main font-bold" onClick={formSubmission}>Let us have a look</button>
				</div>
			</form>
		</div>
		<div id="services-row" className="hidden flex-col items-center justify-center relative -top-16 h-[170px] so-font-main lg:flex lg:px-8  ">
			<p className="so-font-main text-xl font-semibold mb-4">we provide services in:</p>
			<div className="so-font-main text-xl text-blue-400 text-center font-bold px-4">coding, design, marketing, SEO</div>
			<div className="mt-4 mx-auto px-5 text-center font-bold">Use Coupon code: <span className="text-blue-400">2ndO</span> for 20% discount on order</div>
		</div>
		<div id="info-row "className="container px-12 lg:row-span-4 lg:row-start-1 lg:col-start-2 lg:col-end-2 lg:flex lg:flex-col lg:justify-center items-center ">
			<div id="infoHeader-container" className="hidden relative -top-1 border-b-4 border-blue-400 lg:w-fit lg:flex">
				<h1 id="infoHeader-text" className="p-10 relative -top-8 text-center text-[#8fbbff] lg:text-[3.35rem] so-font-main font-bold lg:leading-10">Second Opinion</h1>
			</div>
			<div className="mt-6 mx-auto w-3/4 lg:w-full lg:relative lg:top-4 ">
				<p className="so-font-main font-bold text-xl text-center lg:text-3xl ">
					At <span className="text-2xl lg:text-3xl"><a href="#" id="homepage-link" className="text-[#8fbbff]" >Second Opinion</a></span>, we specialize in making <span className="text-xl text-[#8fbbff] lg:text-3xl">YOUR</span> ideas work, focusing on those details that make the pieces fit.
				</p>
			</div>
		</div>
	</div>
</div>

</>)
}