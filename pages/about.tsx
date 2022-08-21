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
import styles from "../styles/About.module.css"


const About: NextPage = () => {
	return (
		<>
			<Navbar />
			<div className={styles.servicesContainer}>
				<p className={styles.servicesTitle}>My services</p>
				<div className={styles.servicesContents}>
					<ServiceCard/>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default About;
