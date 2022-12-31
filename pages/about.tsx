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
			<SectionTitle text={"About Me"} />
		</div>
	</>
);

export default About;
