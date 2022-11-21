import type { NextPage } from "next";
// import styles from "../styles/Home.module.css";
import Link from "next/link";
// import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";
import { Button, Footer, Line, Navbar, SideSocialLinks, SocialLinks } from "../components";

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
				<section className="container flex items-center justify-between">
					<div className="text-white text-[64px] font-bold mt-5 pt-0 relative">
						<p className="welcomeText text-[230px] text-gray tracking-[-2%] font-bold opacity-50 ml-[-14px] mt-[-77px] absolute">Hello</p>
						<div className="mt-[197px]">
							<p>
								I&apos;m <br />
								Tunji <span className="text-blue">Adeyinka</span>
							</p>
							<div className="mt-5 w-[200px] h-[7px]">
								<Line />
							</div>
						</div>
						<h2 className="text-white font-light text-2xl mt-5">Fullstack Web Developer</h2>
						<div className="mt-24 max-w-[550px]">
							<h2 className="font-regular text-[24px] text-[#959DA9]">Lorem ipsum</h2>
							<h2 className="font-regular text-[24px]">&quot;Code is like humor. When you have to explain it, it’s bad.&quot;</h2>
						</div>
					</div>
					<div className="bg-blue w-[400px] h-[400px] rotate-45">f</div>
					{/* <div className="relative">
						<div className="">
							<img
								src="./images/me.png"
								className=""
								alt=""
							/>
							<svg
								className=""
								viewBox="0 0 220 100"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect
									x="120"
									width="100"
									height="100"
									rx="15"
								/>
							</svg>
						</div>
					</div> */}
					<div className="h-[500px] bg-blue">f</div>
				</section>
			</div>
		</>
	);
};
export default Index;
