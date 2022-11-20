import type { NextPage } from "next";
// import styles from "../styles/Home.module.css";
import Link from "next/link";
// import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";
import { Button, Footer, Navbar, SideSocialLinks, SocialLinks } from "../components";

const Index: NextPage = () => {
	useEffect(() => {
		document.body.style.backgroundImage = `url('/images/background.svg')`;
		document.body.classList.add("indexBodyImage");
	}, []);
	return (
		<>
			<Navbar />

			<div className="container"></div>
		</>
	);
};
export default Index;
