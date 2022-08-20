import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavItem from "./NavItem";
import styles from "../../../styles/Home.module.css"

const Index: NextPage = () => {
	return (
		<nav className={styles.navContainer}>
			<div className={styles.navContents}>
				<img src="../icons/" alt="" />
			</div>
		</nav>
	);
};

export default Index;
