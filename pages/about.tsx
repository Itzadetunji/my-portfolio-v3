import { NextPage } from "next";
import React from "react";
import Link from "next/link";
import styles from "../styles/About.module.css";
import Head from "next/head";
import { Button, ContactMe, Footer, LargeSocialLinks, Navbar, ServiceCard, SideSocialLinks, SocialLinks, TechStack, TestimonialCard, WorkProcessCard } from "../components";

const About: NextPage = () => {
	return (
		<>
			<Navbar />
			<div className={styles.aboutContainer}>
				<div className={styles.servicesContainer}>
					<p className={`sectionTitle`}>My services</p>
					<div className={styles.servicesCardContents}>
						<div className={`${styles.servicesContents1}`}>
							<ServiceCard
								title={"Front End Development"}
								icon={"front-end"}
								subtitle={"I am proficient in front-end languages including Node.js, and React.js. I focus on We focusson using technologies that not only make your solutions attractive, but also enhance its performance. I ensure  Ul/UX of your application and product is user-friendly."}
								delay={"0"}
							/>
							<ServiceCard
								title={"Back End Development"}
								icon={"back-end"}
								subtitle={"I build server side solutions as a back end developer that perform effectively and go far beyond your expectations. NodeJS is my field of expertise.  I have a solid understanding of how to integrate databases together using code."}
								delay={"250"}
							/>
							<ServiceCard
								title={"API Integration"}
								icon={"api"}
								subtitle={"API integration is the process of setting up a way for two or more APIs to exchange data and communicate with one another without the need for human intervention. I am able to both use APIs that other apps create and consume from third parties."}
								delay={"500"}
							/>
						</div>
						<div className={`${styles.servicesContents2}`}>
							<ServiceCard
								title={"Front End Development"}
								icon={"front-end"}
								subtitle={"I am proficient in front-end languages including Node.js, and React.js. I focus on We focusson using technologies that not only make your solutions attractive, but also enhance its performance. I ensure  Ul/UX of your application and product is user-friendly."}
								delay={"0"}
							/>
							<ServiceCard
								title={"Back End Development"}
								icon={"back-end"}
								subtitle={"I build server side solutions as a back end developer that perform effectively and go far beyond your expectations. NodeJS is my field of expertise.  I have a solid understanding of how to integrate databases together using code."}
								delay={"0"}
							/>
							<ServiceCard
								title={"API Integration"}
								icon={"api"}
								subtitle={"API integration is the process of setting up a way for two or more APIs to exchange data and communicate with one another without the need for human intervention. I am able to both use APIs that other apps create and consume from third parties."}
								delay={"0"}
							/>
						</div>
					</div>
				</div>
				<div className={styles.workProcessContainer}>
					<p className={`sectionTitle`}>My Work Process</p>
					<div className={styles.workProcessContents}>
						<div className={styles.workProcessContent1}>
							<WorkProcessCard
								title={"Discover"}
								icon={"discover"}
								subtitle={"In order to discover the issues that I am attempting to resolve, I conduct personal research."}
								delay={"0"}
							/>
							<WorkProcessCard
								title={"Define"}
								icon={"define"}
								subtitle={"I consider the various solutions that could be used for the problem that has been found."}
								delay={"250"}
							/>
							<WorkProcessCard
								title={"Discover"}
								icon={"implement"}
								subtitle={"I put in the work, get into the zone👨🏿‍💻, and build scalable and high-quality apps."}
								delay={"500"}
							/>
						</div>
						<div className={styles.workProcessContent2}>
							<WorkProcessCard
								title={"Discover"}
								icon={"discover"}
								subtitle={"In order to discover the issues that I am attempting to resolve, I conduct personal research."}
								delay={"0"}
							/>
							<WorkProcessCard
								title={"Define"}
								icon={"define"}
								subtitle={"I consider the various solutions that could be used for the problem that has been found."}
								delay={"0"}
							/>
							<WorkProcessCard
								title={"Discover"}
								icon={"implement"}
								subtitle={"I put in the work, get into the zone👨🏿‍💻, and build scalable and high-quality apps."}
								delay={"0"}
							/>
						</div>
					</div>
				</div>
				<div className={styles.techStackContainer}>
					<p className={`sectionTitle`}>My Tech Stack</p>
					<TechStack />
				</div>
			</div>
			<ContactMe />
			<Footer />
		</>
	);
};

export default About;
