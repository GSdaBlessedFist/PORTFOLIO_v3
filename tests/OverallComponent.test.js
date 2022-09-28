import Home from "../pages/index";
import WebDevSection from "../components/WebDevSection";
import EmailDevSection from "../components/EmailDevSection";
import GraphicArtSection from "../components/GraphicArtSection";
import AboutMeSection from "../components/AboutMeSection";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Overview of components working",()=>{
	it('should display Home page',()=>{
		render(<Home/>)
		screen.debug()
	})

	it('should display WebDev Section component',()=>{
		render(<WebDevSection/>)
		screen.debug()
	})

	it('should display EmailDev component',()=>{
		render(<EmailDevSection/>)
		screen.debug()
	})

	it('should display GraphicArt Section component',()=>{
		render(<GraphicArtSection/>)
		screen.debug()
	})

	it('should display AboutMe Section component',()=>{
		render(<AboutMeSection/>)
		screen.debug()
	})
})