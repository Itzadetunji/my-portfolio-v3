import { NextPage } from "next";
import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "../styles/About.module.css";
import Head from "next/head";
import { Button, ContactMe, Footer, LargeSocialLinks, Line, Navbar, ServiceCard, SideSocialLinks, SocialLinks, TechStack, TestimonialCard, WorkProcessCard } from "../components";
import { SectionTitle } from "../components";

interface AboutMeStateProps {
	selectedState: any;
}

const About: NextPage = () => {
	const [selectedState, setSelectedState] = useState<number>(1);
	return (
		<>
			{/* <Line /> */}
			<div className="mx-[40px] sm:mx-[50px] xl:mx-[85px]">
				<section className="mt-12 text-white">
					<SectionTitle text={"About Me"} />
					<div className="pt-16 flex space-x-[60px]">
						<div className="flex-1 bg-gray max-w-[525px]" />
						<div className="flex flex-1 justify-between items-center">
							<h1 className="text-[32px] font-bold my-8">I&apos;m a FULL-STACK DEVELOPER</h1>
							<div className="flex justify-between items-center h-5">
								<div
									className="relative border-white border rounded-full w-[17px] h-[17px] cursor-pointer"
									onClick={() => setSelectedState(1)}
								>
									<div className={`absolute rounded-full w-2.5 h-2.5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 ${selectedState === 1 ? "bg-white duration-[500ms] ease-in-out opacity-100" : "duration-[500ms] opacity-0 ease-in-out"}`}></div>
								</div>
								<hr className="bg-white flex-1 h-[1px] min-w-[24px]" />
								<div
									className="relative border-white border rounded-full w-[17px] h-[17px] cursor-pointer"
									onClick={() => setSelectedState(2)}
								>
									<div className={`absolute rounded-full w-2.5 h-2.5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 ${selectedState === 2 ? "bg-white duration-[500ms] ease-in-out opacity-100" : "duration-[500ms] opacity-0 ease-in-out"}`}></div>
								</div>
								<hr className="bg-white flex-1 h-[1px] min-w-[24px]" />
								<div
									className="relative border-white border rounded-full w-[17px] h-[17px] cursor-pointer"
									onClick={() => setSelectedState(3)}
								>
									<div className={`absolute rounded-full w-2.5 h-2.5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 ${selectedState === 3 ? "bg-white duration-[500ms] ease-in-out opacity-100" : "duration-[500ms] opacity-0 ease-in-out"}`}></div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default About;

const AboutMeState: NextPage<AboutMeStateProps> = ({ selectedState }) => {
	const defaultState = selectedState;
	console.log(defaultState);
	return (
		<>
			<div className="relative border-white border rounded-full w-[17px] h-[17px]">
				<div className={`absolute rounded-full w-2.5 h-2.5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}></div>
			</div>
		</>
	);
};
