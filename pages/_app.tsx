import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Footer, Navbar, SmallNav } from "../components";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<Head>
				<link
					href="https://unpkg.com/aos@2.3.1/dist/aos.css"
					rel="stylesheet"
				></link>
			</Head>
			<div className="mx-[40px] sm:mx-[50px] xl:mx-[85px]">
				<Navbar
					isOpen={isOpen}
					setIsOpen={setIsOpen}
				/>
				<SmallNav isOpen={isOpen} />
			</div>
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
