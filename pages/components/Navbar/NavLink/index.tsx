import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "../../../../styles/Navbar.module.css";

interface NavItemProps {
	title: string;
	path: string;
	active: boolean;
}

const Index: React.FC<NavItemProps> = ({ title, path, active }) => {
	return (
		<div className={styles.navLink}>
			<Link href={path}>
				<p className={`${active && styles.navItemActive}`}>{title}</p>
			</Link>
		</div>
	);
};

export default Index;
