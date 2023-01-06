
const projectInfo = [
	{
		id: "simple-cosmic-blog",
		name: "simple-cosmic-blog",
		short: "This project was simply about testing out the Cosmic CMS.",
		description: `
			<div style="word-break: break-word;font-size:1.35rem;">
				<span style="font-size:1.5rem;">On the backend</span>,this sample blog site was put together in <span style="color:#B4B897"><b>Node/ExpressJS</b></span> using <span style="color:#B4B897"><b>HandlebarsJS</b></span> for <b>templating</b> . Several lorem ipsum variants populate the <span style="color:#B4B897"><b>Cosmic CMS</b></span> for testing.  The Cosmic CMS is capable of GraphQL data fetching but for a project this small in scale, I decided to stick with the standard <b>REST fetch</b>.  
			</div><br/>
			<div style="word-break: break-word;font-size:1.35rem;">
				On the frontend, the styling was done using <span style="color:#B4B897"><b>SASS</b></span>. At this time, I had not yet been introduced to TailwindCSS (although is based on SASS). I wanted to experiment with a more column based layout on this one so employed the 'technically' button to open a hidden section with info on the site itself.  The sliding effects were achieved using a touch of GSAP. Towards the center there are tabs for projects, info about me, and a contact page.<span style="color:#B4B897"><em> Note: This project was my last created with a desktop first approach.</em></span>
			</div></br>
			<div style="word-break: break-word;font-size:1.35rem;">
				Back on the server side, the Contact email feature was configured using <span style="font-size:1.5rem;color:#B4B897"><b>Nodemailer</b></span> with <span style="font-size:1.5rem;color:#B4B897"><b>OAuth2</span> authentication</b>. I used this solution because there would only be 2 emails created.  One is sent to me while the other is a 'Thank you confirmation'.
			</div><br/>
			<div style="word-break: break-word;font-size:1.35rem;">
				<b>A big take away from this project was a data transfer technique I tried out.</b> I wanted to test how data-attributes could be used on hidden HTML elements to store info (instead of having to add js).  Through the usage of serveral data-attributes, objects passed from Cosmic CMS were destructured and created '<em>silent but deadly divs</em>'.  While this technique works, it greatly affects load time, especially on looped items.  
			</div>
		`,
		learned: ["data-attributes","Cosmic CMS","destructuring","sending emails"],
		techStack: "NodeJS, Express, Handlebars, SASS, Cosmic CMS",
		screenShot: "https://i.ibb.co/bdk07fJ/simple-cosmic-blog-screenshot.png",
		url: "/archives/simple-cosmic-blog/screenshot-gallery",
		git: "https://github.com/GSdaBlessedFist/simpleCosmicBlog",
		isLive:false
	},
	{
		id: "aftercall-excerpt",
		name: "Aftercall-excerpt",
		short: "The goal was to create an interactive storyline using the GreenSock library.",
		description: `
			<div style="word-break: break-word;font-size:1.35rem;">
				<span style="font-size:1.5rem;">This</span>
				tiny excerpt is a rough draft intro to an <b>interactive graphic short story</b> I'm currently working on,entitled <span style="font-size:1.5rem;color:#B4B897"><b>"AfterCall"</b></span>.  I'm still tinkering with the motion theme and so chosen to build it out some more in Codepen.
			</div><br/>
			<div style="font-size:1.5rem;color:#B4B897"><b>All original work!</b>
			</div>
			<div style="font-size:1.35rem;">From the story/illustrations to the interactivity.</div><br/>
			<div style="font-size:1.35rem">So right now, the illustrations are just vectorized sketches done in Inkscape, but as my work on the novel progresses, I'll be really drawing out the panels, keeping them vector-based. 
			</div><br/>
			<div style="font-size:1.35rem">On the development side, I'll more than likely <b>server-side render(SSR)</b> using <span style="color:#B4B897"><b>NextJS</b></span>. I've used the GreenSock (<span style="color:#B4B897"><b>GSAP animation library</b></span>) for some basic animation applied to the panels and the drag and drop functionality.</div>
		`,
		learned: ["SVG workflow","basic GSAP methods","overall project management"],
		techStack: "SCSS, SVG, and GSAP ",
		screenShot: "https://i.ibb.co/23hJ6V0/aftercall-excerpt-screenshot.png",
		url: "https://codepen.io/GuyShifty/pen/xxYwOwK/?layout=left",
		git: "https://codepen.io/GuyShifty/pen/xxYwOwK/?layout=left",
		isLive:true
	},
	{
		id: "react-movie-search",
		name: "React-movie-search",
		short: "The goal was to connect to an api to create a movie search app.",
		description: `
			<div style="word-break: break-word;font-size:1.35rem;">
				<span style="font-size:1.5rem;">This</span> 
				<b>SPA</b> pulls from The Movie Database (TMDB) Api using a simple <b>fetch</b> call to find general info on quite a few movies.
			</div><br/>

		`,
		learned: ["the Movie Database"],
		techStack: "React, SASS, TMDB Api, and Vercel",
		screenShot: "https://i.ibb.co/BTGSKN1/movie-search-screenshot.png",
		url: "https://tmdb-movie-search-cxueep507-gsdablessedfist.vercel.app/",
		git: "https://github.com/GSdaBlessedFist/TMDB-Movie-Search",
		isLive:true
	},
	{
		id: "bonsai-haiku",
		name: "a-bonsai-haiku",
		short: "I wanted to create a minimalist yet interactive interface to present a haiku I found.",
		description: `
			<div style="word-break: break-word;font-size:1.35rem;">
				<span style="font-size:1.5rem;">This</span> 
				 page was created using the <span style="font-size:1.5rem;color:#B4B897">TailWindCSS</span> library and animated with <span style="font-size:1.5rem;color:#B4B897">GSAP.</span> It's purpose was a simple one...present a haiku and to have a matching stage for it.  Using GSAP's awesome library, I able to easily add delays in the text presentation to simulate a speaking cadence.
			</div><br/>
			<div style="word-break: break-word;font-size:1.35rem;">The illustration of the bonsai is an original, created in <span style="font-size:1.5rem;color:#B4B897">Inkscape</span> and <span style="font-size:1.5rem;color:#B4B897">Krita.</span> </div><br/>
			<div style="word-break: break-word;font-size:1.35rem;"> The bonsai consists of multiple layers to create a depth to the foliage, with the colors varying in their saturation/lightness.  I was going for a subtle effect based on the user's cursor position and constrained the color range using GSAP.</div><br/>
			<div style="word-break: break-word;font-size:1.35rem;"><em>I'm still not too sure what the haiku means, though</em></div>
		`,
		learned: ["basic TailwindCSS usage","dynamic attribute updating using GSAP","rigging SVG elements for animation"],
		techStack: "TailWindCSS, GSAP and SVG",
		screenShot: "https://i.ibb.co/31vGhf3/bonsai-haiku-screenshot.png",
		url: "https://bonsai-haiku.herokuapp.com/",
		git: "https://github.com/GSdaBlessedFist/bonsai-haiku",
		isLive:true
	},
	
	
]

export default projectInfo;
