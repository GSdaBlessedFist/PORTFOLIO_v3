import Image from 'next/image';
import Head from "next/head";

export default function KristysBearyFunFacts(){
	
	return (<>
		<Head>
			<title>Beary Fun Facts</title>
		</Head>
		<div className="container h-[75vh] flex justify-center items-center  my-0 mx-auto  border-box">
			<div className="container w-full relative  o">
				<Image src={"https://i.ibb.co/PtynfLD/kristys-beary-fun-facts-screenshot-fullsized.png"} width={1908} height={905} alt=""/>
			</div>
			
		</div>



	</>)
}