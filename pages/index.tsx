import type { NextPage } from "next";
// import styles from "../styles/Home.module.css";
import Link from "next/link";
// import Link from "next/link";
import { SetStateAction, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button, Footer, Line, Navbar, SideSocialLinks, SmallNav, SocialLinks } from "../components";
import Typed from "typed.js";

const Index: NextPage = () => {
	const el = useRef(null);
	useEffect(() => {
		const typed = new Typed(el.current, {
			strings: ["Hello", "Ciao", "Hola", "Yo"],
			startDelay: 100,
			typeSpeed: 100,
			backSpeed: 150,
			smartBackspace: true,
			loop: true,
			showCursor: true,
			cursorChar: "!",
			shuffle: true,
			autoInsertCss: true,
		});
		return () => {
			typed.destroy();
		};
	}, []);
	const [isOpen, setIsOpen] = useState(false);
	useEffect(() => {
		document.body.classList.add("indexBodyImage");
	}, []);
	return (
		<>
			<div className="mx-[40px] sm:mx-[50px] xl:mx-[85px] relative">
				<Navbar
					isOpen={isOpen}
					setIsOpen={setIsOpen}
				/>
				<SmallNav isOpen={isOpen} />
				<div className="flex flex-row items-center justify-center mb-8 sm:mb-12">
					<section className="container max-w-[1270px] mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between">
						<div className="text-white text-[48px] xl:text-[64px] font-bold mt-5 pt-0 relative">
							<div className="welcomeText text-[100px] sm:text-[150px] lg:text-[200px] xl:text-[230px] text-gray tracking-[-2%] font-bold opacity-50 ml-[-14px] mt-[-77px] absolute flex items-center">
								<span ref={el}></span>
							</div>
							<div className="bg-blue h-[200px] md:h-[300px] md:max-w-[300px] mx-auto lg:hidden mt-[70px]"></div>
							<div className="lg:mt-[197px] max-w-[430px]">
								<p>
									I&apos;m <br />
									Tunji<span className="text-blue"> Adeyinka</span>
								</p>
								<div className="mt-5 w-[200px] h-[7px]">
									<Line />
								</div>
							</div>
							<h2 className="text-white font-light text-2xl mt-5">Fullstack Web Developer</h2>
							<div className="mt-20 md:max-w-[300px] xl:max-w-[550px]">
								<h2 className="font-regular text-[20px] xl:text-[24px] text-[#959DA9]">Cory House</h2>
								<h2 className="font-regular text-[20px] xl:text-[24px]">&quot;Code is like humor. When you have to explain it, it&apos;s bad.&quot;</h2>
							</div>
						</div>
						<div className="bg-blue flex-1 h-[400px] max-w-[400px] hidden lg:flex"></div>
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
						<SideSocialLinks className={"hidden xl:block"} />
					</section>
				</div>
				<div className="xl:hidden absolute left-1/2 translate-x-[-50%] bottom-[px] flex justify-center mt-8 sm:mt-12">
					<SideSocialLinks className={""} />
				</div>
			</div>
		</>
	);
};
export default Index;
