import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "../../../../styles/Navbar.module.css";

interface NavItemProps {
	title: string;
	path: string;
}

const Index: React.FC<NavItemProps> = ({ title, path }) => {
	const router = useRouter().pathname;
	return (
		<div>
			<Link href={path}>
				<p
					className={`${
						router.includes("about") &&
						router.includes("contact") &&
						router.includes("portfolio")
							? styles.navItemActive
							: ''
					}`}
				>
					{title}
				</p>
			</Link>
		</div>
	);
};

export default Index;
