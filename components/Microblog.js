import {microblog_entries} from "./microblog-entries";

export const getStaticProps = ()=>{
    return{
      props: {
        message: microblog_entries
             }
      }
}

export default function Microblog({message}){
	
	let phrase = microblog_entries[Math.floor(Math.random()*microblog_entries.length)]

	return (<>
		{microblog_entries ?
		 <h3 key="phrase.id"><em>{phrase.message}</em></h3>
		 :<h3><em>Idea of the day</em></h3>}
	</>)
}