import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
// import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Social_Links from "../components/SocialLinks";
import Button from "../components/Button";
import Link from "next/link";
import SideSocialLinks from "../components/SideSocialLinks";

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
