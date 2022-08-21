/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import React from "react";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ServiceCard from "./components/ServiceCard";
import WorkProcess from "./components/WorkProcess";
import TestimonialCard from "./components/TestimonialCard";
import TechStack from "./components/TechStack";
import Social_Links from "./components/SocialLinks";
import Link from "next/link";
import LargeSocialLinks from "./components/LargeSocialLinks";
import SideSocialLinks from "./components/SideSocialLinks";
import styles from "../styles/About.module.css";

const About: NextPage = () => {
	return (
		<>
			<Navbar />
			<div className={styles.aboutContainer}>
				<div className={styles.servicesContainer}>
					<p className={styles.servicesTitle}>My services</p>
					<div className={styles.servicesContents}>
						<ServiceCard
							title={"Front End Development"}
							icon={"front-end"}
							subtitle={
								"I am proficient in front-end languages including Node.js, and React.js. I focus on We focusson using technologies that not only make your solutions attractive, but also enhance its performance. I ensure  Ul/UX of your application and product is user-friendly."
							}
						/>
						<ServiceCard
							title={"Back End Development"}
							icon={"back-end"}
							subtitle={
								"I build server side solutions as a back end developer that perform effectively and go far beyond your expectations. NodeJS is my field of expertise.  I have a solid understanding of how to integrate databases together using code."
							}
						/>
						<ServiceCard
							title={"API Integration"}
							icon={"api"}
							subtitle={
								"API integration is the process of setting up a way for two or more APIs to exchange data and communicate with one another without the need for human intervention. I am able to both use APIs that other apps create and consume from third parties."
							}
						/>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default About;
