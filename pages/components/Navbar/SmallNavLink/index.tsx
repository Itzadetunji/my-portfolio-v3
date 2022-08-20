import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import styles from "../../../../styles/Navbar.module.css";

interface SmallNavItemProps {
	title: string;
	path: string;
	active: boolean;
}

const Index: React.FC<SmallNavItemProps> = ({ title, path, active }) => {
	return (
		<Link href={path}>
			<div className={styles.smallNavLink}>
				<div
					className={`${styles.smallNavLinkBorder} ${
						active && styles.smallNavLinkBorderActive
					}`}
				>
					<p className={styles.smallNavLinkP}>{title}</p>
				</div>
			</div>
		</Link>
	);
};

export default Index;
