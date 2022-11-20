import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import styles from "../../../styles/Navbar.module.css";

interface SmallNavItemProps {
	title: string;
	path: string;
	active: boolean;
}

export const SmallNavLink: React.FC<SmallNavItemProps> = ({ title, path, active }) => {
	return (
		<Link href={path}>
			<div>
				<div>
					<p>{title}</p>
				</div>
			</div>
		</Link>
	);
};
