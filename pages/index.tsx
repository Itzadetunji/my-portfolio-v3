import type { NextPage } from "next";
// import styles from "../styles/Home.module.css";
import Link from "next/link";
// import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";
import { Button, Footer, Navbar, SideSocialLinks, SocialLinks } from "../components";

const Index: NextPage = () => {
	useEffect(() => {
		// document.body.style.backgroundImage = `url('/images/background.svg')`;
		document.body.classList.add("indexBodyImage");
		// document.body.classList.add("squiggle");
	}, []);
	return (
		<>
			<div className="mx-[40px] md:mx-[85px]">
				<Navbar />

				<div className="container">
					<p className="text-[230px] text-white font-bold">Hello</p>
				</div>
			</div>
		</>
	);
};
export default Index;
