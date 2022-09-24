
import Image from 'next/image';

export default function SecondOpinion(){
	
	return (<>
		<div className="container mx-auto bg-[#070709ff] mt-4">
		  	<div className="grid grid-rows-4 o">
		  		<div id="logo-row" className="flex justify-center b" >
		  			<Image src="/images/the_second_opinion_grp-logo(simple).png" width={175} height={175}/>
		  		</div>
		  		<div id="header-row" className="w-1/2 flex justify-center items-center mx-auto py-2 px-8 text-2xl so-font-main b text-center" >
		  			 <strong><div>Not sure if <span className="text-[#8fbbff]">your</span> design is working?</div></strong>
		  		</div>
		  		 <div class="section-form ">
			      <form action="">
			        <div class=" top-row ">
			          <div>
			            <div class="label "> </div>
			            <input type="text" class="url highlight" placeholder="www.yourSite.com" />  
			          </div>
			          <div>
			            <div class="label" id="email-label">email:</div>
			            <input type="text" id="email-input" name="email" class="highlight" placeholder="youremail@email.com" />
			          </div>
			        </div>
			      </form>
		        <div class="button-row">
		          <button>Let us have a look</button>
		        </div>
		  		<div className="b">info</div>
		  	</div>
		</div>
	</>)
}