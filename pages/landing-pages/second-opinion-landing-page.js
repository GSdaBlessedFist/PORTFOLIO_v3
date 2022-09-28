
import Image from 'next/image';

export default function SecondOpinion(){
	
	return (<>
		<div className="container mx-auto bg-[#070709ff] mt-4">
		  	<div className="grid grid-rows-[225px_120px_1fr_1fr] o">

		  		<div id="logo-row" className="flex justify-center " >
		  			<Image src="/images/the_second_opinion_grp-logo(simple).png" className="object-scale-down" width={175} height={115} alt={"a screenshot"}/>
		  		</div>

		  		<div id="header-row" className="container flex justify-center items-center " >
		  			<div id="headerText-container" className="container w-1/2 md:w-3/4">
		  				<div id="header-text" className="text-3xl so-font-main  text-center font-bold">
		  			 		Not sure if <span className="text-[#8fbbff]">your</span> design is working?
		  			 	</div>
		  			</div>
		  		</div>

		  		<div id="form-row" className="container flex justify-center items-center pb-7 ">
			      	<form action="" className="w-1/2 text-xl pr-5 ">
			        	<div id="form-topSection" className="">
			          		<div className="py-2 grid grid-cols-[auto_192px] md:grid-cols-[auto_220px]  ">
			            		<div id="url-label" className="so-font-main font-bold text-right pr-4 md:pr-2">http:// </div>
			            		<input id="url-input" className="so-font-main text-base text-[#8fbbff] text-left pl-2 bg-slate-700 placeholder:text-[#62799c] rounded-full md:w-full" type="url" name="url" placeholder="www.yourSite.com" />  
			          		</div>
				          	<div className="py-2 grid grid-cols-[auto_192px] md:grid-cols-[auto_220px]  ">
				            	<div id="email-label" className="so-font-main font-bold text-right pr-4 md:pr-2" >email:</div>
				            	<input id="email-input" className="so-font-main text-base text-[#8fbbff] text-center bg-slate-700 placeholder:text-[#62799c] rounded-full md:w-full" type="email"  name="email" placeholder="youremail@email.com" />
				          	</div>
				          	<div className="py-2 grid grid-cols-[auto_192px] md:grid-cols-[auto_220px]  ">
				            	<div id="contact-label" className="so-font-main font-bold text-right pr-4 md:pr-2" >contact:</div>
				            	<input id="contact-input" className="so-font-main text-base text-[#8fbbff] text-center bg-slate-700 placeholder:text-[#62799c] rounded-full md:w-full" type="text"  name="contact" placeholder="Who will be talking to?" />
				          	</div>
			        	</div>
			        	<div id="form-buttonSection" className="flex justify-center pt-4 pl-4">
				          <button className="bg-[#8fbbff] py-4 px-6 rounded-full so-font-main font-bold">Let us have a look</button>
				        </div>	
			      	</form>
			    </div>   

		  		<div id="info-row "className="container px-24 ">

					      <div id="infoHeader-container" className="hidden ">
					        <h1 id="infoHeader-text" className="so-font-main ">Second Opinion</h1>
					      </div>

					      <div className="mt-6 mx-auto w-3/4 ">
					      	<p className="so-font-main font-bold text-xl">
					        	<center>At <span className="text-2xl"><a href="#" id="homepage-link" className="text-[#8fbbff]" >Second Opinion</a></span>, we specialize in making <span className="text-xl text-[#8fbbff]">YOUR</span> ideas work, focusing on those details that make the pieces fit.</center>
					      	</p>
					      </div>
					    
					  
		  		</div>
		  	</div>
		</div>
	</>)
}