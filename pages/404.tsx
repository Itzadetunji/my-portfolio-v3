import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import "../styles/notFoundPage.module.css";
import { Navbar } from "../components";

const NotFoundPage: NextPage = () => {
	useEffect(() => {
		// document.body.style.backgroundImage = `url('/images/background.svg')`;
		// document.body.classList.add("notFoundBody");
		// document.body.classList.add("squiggle");
	}, []);
	const [navIcon, setNavIcon] = useState(false);
	return (
		<>
			<Navbar />
			{/* <section className="notFoundBody"> */}
			<section className="notFoundContent fixed translate-x-[-50%] translate-y-[-50%]">
				<div
					title="404"
					className="notFoundDiv"
				>
					404
				</div>
			</section>
			{/* </section> */}
		</>
	);
};

export default NotFoundPage;
