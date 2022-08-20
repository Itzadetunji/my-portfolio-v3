import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavItem from "./NavItem";
import styles from "../../../styles/Navbar.module.css";

const Index: NextPage = () => {
	return (
		<nav className={styles.navContainer}>
			<div className={styles.navContents}>
				<img
					src="../icons/nav-icons/logo.svg"
					alt=""
					className={styles.navLogo}
				/>
				<img
					src="../icons/nav-icons/hamburger.svg"
					alt=""
					className={styles.navHamburger}
				/>
				<div className={styles.navLinks}>
					<NavItem title={"Home"} path={"/"} />
					<NavItem title={"About"} path={"/about"} />
					<NavItem title={"Portfolio"} path={"/portfolio"} />
					<NavItem title={"Contact"} path={"/contact"} />
				</div>
				<div className={styles.navSocialIcons}>
					<img src="../icons/social-icons/github.svg" alt="" />
					<img src="../icons/social-icons/linkedin.svg" alt="" />
				</div>
			</div>
		</nav>
	);
};

export default Index;
