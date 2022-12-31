import { NextPage } from "next";
import React from "react";
import styles from "../styles/About.module.css";
import Head from "next/head";
import { Button, ContactMe, Footer, LargeSocialLinks, Line, Navbar, ServiceCard, SideSocialLinks, SocialLinks, TechStack, TestimonialCard, WorkProcessCard } from "../components";
import { SectionTitle } from "../components";

const About: NextPage = () => (
	<>
		{/* <Line /> */}
		<div className="mx-[40px] sm:mx-[50px] xl:mx-[85px]">
			<section className="mt-12 text-white">
				<SectionTitle text={"About Me"} />
				<div className="pt-16 flex space-x-[60px] justify-between">
					<div className="flex-1 bg-gray" />
					<div>
						<h1 className="font-bold my-8">I&apos;m a FULL-STACK DEVELOPER</h1>
					</div>
					<div className="flex justify-between items-center min-w-[106px]">
						d
						<hr className="bg-white grow h-[1px]" />d
					</div>
				</div>
			</section>
		</div>
	</>
);

export default About;
