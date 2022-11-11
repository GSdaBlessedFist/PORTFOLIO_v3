import Image from 'next/image';
import Head from "next/head";
import Link from "next/link";

export default function KristysBearyFunFacts(){
	
	return (<>
		<Head>
			<title>Beary Fun Facts</title>
		</Head>
		<div className="container h-[75vh] flex flex-col justify-center items-center  my-0 mx-auto  border-box">
			<div className="container w-full relative  o">
				<Image src={"https://i.ibb.co/PtynfLD/kristys-beary-fun-facts-screenshot-fullsized.png"} width={1908} height={905} alt=""/>
			</div>
			<Link href="/landing-pages/dangerously-smooth-landing-page">
				<a className="bg-transparent text-midtone border border-primary border-2 p-4 mt-2 hover:border-accent hover:text-white">To the next project</a>
			</Link>
		</div>



	</>)
}