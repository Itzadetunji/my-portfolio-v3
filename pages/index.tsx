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

				<section className="container flex justify-between">
					<div className="text-white text-[64px] font-bold mt-5 pt-0">
						<p className="welcomeText text-[230px] text-gray tracking-[-2%] font-bold opacity-50 ml-[-14px] mt-[-97px]">Hello</p>
						<p className="mt-[-37px]">
							I&apos;m <br />
							Tunji <span className="text-blue">Adeyinka</span>
						</p>
						<div className="mt-5">
							<Line
								height={"7"}
								length={"200"}
							/>
						</div>
						<h2 className="text-white font-light text-2xl mt-5">Fullstack Web Developer</h2>
					</div>
					<div>
						<img
							src="./images/me.png"
							alt=""
						/>
					</div>
				</section>
			</div>
		</>
	);
};
export default Index;
