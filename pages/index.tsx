import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
// import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Button, Footer, Navbar, SideSocialLinks, SocialLinks } from "../components";

const Index: NextPage = () => {
	useEffect(() => {
		console.log("I Only run once (When the component gets mounted)");
	}, []);
	return (
		<>
			<Navbar />

			<Footer />
		</>
	);
};
export default Index;
