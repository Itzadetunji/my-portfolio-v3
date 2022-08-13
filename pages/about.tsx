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

const About: NextPage = () => {
	const TestimonialCardContents = [
		{
			imagepath: "/images/testimonial1.png",
			name: "Ludwig Dieter",
			role: "FullStack Developer",
			description:
				"After going through all the steps, I get into the zone 👨🏿‍💻and deliver quality and scalable applications.After going through all the steps, I get into the zone 👨🏿‍💻and deliver quality and scalable applications",
		},
		{
			imagepath: "/images/testimonial1.png",
			name: "Ludwig Dieter",
			role: "FullStack Developer",
			description:
				"After going through all the steps, I get into the zone 👨🏿‍💻and deliver quality and scalable applications.After going through all the steps, I get into the zone 👨🏿‍💻and deliver quality and scalable applications",
		},
		{
			imagepath: "/images/testimonial1.png",
			name: "Ludwig Dieter",
			role: "FullStack Developer",
			description:
				"After going through all the steps, I get into the zone 👨🏿‍💻and deliver quality and scalable applications.After going through all the steps, I get into the zone 👨🏿‍💻and deliver quality and scalable applications",
		},
		{
			imagepath: "/images/testimonial1.png",
			name: "Ludwig Dieter",
			role: "FullStack Developer",
			description:
				"After going through all the steps, I get into the zone 👨🏿‍💻and deliver quality and scalable applications.After going through all the steps, I get into the zone 👨🏿‍💻and deliver quality and scalable applications",
		},
	];

	return (
		<>
			<Navbar />
			<div></div>
			<Footer />
		</>
	);
};

export default About;
