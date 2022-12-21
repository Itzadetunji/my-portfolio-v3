import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Footer } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<link
					href="https://unpkg.com/aos@2.3.1/dist/aos.css"
					rel="stylesheet"
				></link>
			</Head>
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
