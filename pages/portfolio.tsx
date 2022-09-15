import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SocialLinks from "../components/SocialLinks";
import Button from "../components/Button";
import PortfolioCard from "../components/PortfolioCard";
import Link from "next/link";
import LargeSocialLinks from "../components/LargeSocialLinks";

const Portfolio: NextPage = () => {
	return (
		<>
			{/* <ParticleComponent/> */}
			<div className="">
				<Navbar />
				<Footer />
			</div>
		</>
	);
};
export default Portfolio;
