import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavLink from "./NavLink";
import SmallNavLink from "./SmallNavLink";
import styles from "../../../styles/Navbar.module.css";

const Index: NextPage = () => {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter().pathname;
	useEffect(() => {
		if (isOpen == true) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [isOpen]);
	return (
		<nav className={styles.navContainer}>
			<div className={styles.navContents}>
				<img
					src="../icons/nav-icons/logo.svg"
					alt=""
					className={styles.navLogo}
				/>
				<label className={styles.hideHam}>
					<input type="checkbox" onClick={() => setIsOpen(!isOpen)} />
					<span></span>
					<span></span>
					<span></span>
				</label>
				<div className={styles.navLinksContainer}>
					<NavLink
						title={"Home"}
						path={"/"}
						active={
							!router.includes("about") &&
							!router.includes("contact") &&
							!router.includes("portfolio")
								? true
								: false
						}
					/>
					<NavLink
						title={"About"}
						path={"/about"}
						active={router.includes("about") ? true : false}
					/>
					<NavLink
						title={"Portfolio"}
						path={"/portfolio"}
						active={router.includes("portfolio") ? true : false}
					/>
					<NavLink
						title={"Contact"}
						path={"/contact"}
						active={router.includes("contact") ? true : false}
					/>
				</div>
				<div className={styles.navSocialIconContainer}>
					<img
						src="../icons/social-icons/github.svg"
						alt=""
						className={styles.navSocialIcon}
					/>
					<img
						src="../icons/social-icons/linkedin.svg"
						alt=""
						className={styles.navSocialIcon}
					/>
				</div>
			</div>
			{isOpen && (
				<div className={styles.smallNavContainer}>
					<SmallNavLink
						title={"Home"}
						path={"/"}
						active={
							!router.includes("about") &&
							!router.includes("contact") &&
							!router.includes("portfolio")
								? true
								: false
						}
					/>
					<SmallNavLink
						title={"About"}
						path={"/about"}
						active={router.includes("about") ? true : false}
					/>
					<SmallNavLink
						title={"Portfolio"}
						path={"/portfolio"}
						active={router.includes("portfolio") ? true : false}
					/>
					<SmallNavLink
						title={"Contact"}
						path={"/contact"}
						active={router.includes("contact") ? true : false}
					/>
					<div className={styles.navSmallSocialContainer}>
						<div className={styles.navSmallSocialContents}>
							<img
								src="../icons/social-icons/github.svg"
								alt=""
								className={styles.navSmallSocialIcon}
							/>
							<img
								src="../icons/social-icons/linkedin.svg"
								alt=""
								className={styles.navSmallSocialIcon}
							/>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Index;
