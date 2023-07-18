import React from "react";
import About from "../components/About";
import Product from "../components/Product";
import Best from "../components/BestProduct";
import Ziggity from "../components/Ziggity";
import Location from "../components/Location";
import Contact from "../components/Contact";
const Main = () => {
	return (
		<main>
			<About/>
			<Product/>
			<Best/>
			<Ziggity/>
			<Location/>
			<Contact/>
		</main>
	)
}

export default Main;