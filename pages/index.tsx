import type { NextPage } from "next";
// import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useEffect } from "react";
import { Button, Footer, Navbar, SideSocialLinks, SocialLinks } from "../components";

const Index: NextPage = () => {
	useEffect(() => {
		document.body.style.backgroundImage = `url('/images/background.svg')`;
		document.body.classList.add("indexBodyImage");
	}, []);
	return (
		<>
			<div className="container w-[100%] h-[100vh]"></div>
		</>
	);
};
export default Index;
