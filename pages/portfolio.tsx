import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";

import { Button, Footer, LargeSocialLinks, Navbar, PortfolioCard, SocialLinks } from "../components";

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
