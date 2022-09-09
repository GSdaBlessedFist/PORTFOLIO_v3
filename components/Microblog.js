import {useState} from "react";
import {microblog_entries} from "./microblog-entries";

export const getStaticProps = async()=>{
		console.log(typeof microblog_entries)
    return{
      props: {
        microBlogEntries: microblog_entries
      }
    }
}

const function Microblog({microBlogEntries}){
	
	
	return (<>
		{microBlogEntries.map((entry)=>{
			<div>entry.messag</div>
		})}

	</>)
}

