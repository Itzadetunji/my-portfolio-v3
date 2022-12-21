import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { NavLink } from "../";

export const Navbar: NextPage = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [navIcon, setNavIcon] = useState(false);
	useEffect(() => {
		if (isOpen == true) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [isOpen]);

	return (
		<nav className="mx-auto max-w-[1272px] py-4">
			<div className="flex items-center justify-between">
				{/* <div className="wrapper">
					<button
						onClick={() => {
							setNavIcon(!navIcon);
						}}
						className={`nav ${navIcon && "open"}`}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div> */}
				<div className="w-10 md:w-14 h-10 md:h-14 relative cursor-pointer">
					<Image
						src="/images/logo.svg"
						alt="Adetunji's Logo"
						layout="fill"
						objectFit="contain"
					/>
				</div>
				<div className="flex space-x-11 justify-self-center">
					<NavLink
						title={"Home"}
						path={"/"}
					/>
					<NavLink
						title={"About Me"}
						path={"/about"}
					/>
					<NavLink
						title={"Portfolio"}
						path={"/portfolio"}
					/>
					<NavLink
						title={"Contact"}
						path={"/contact"}
					/>
				</div>
				<div className="w-10 md:w-14 h-10 md:h-14 relative cursor-pointer">
					<Image
						src="/images/headphones.svg"
						alt="Adetunji's Logo"
						layout="fill"
						objectFit="contain"
					/>
				</div>
			</div>
		</nav>
	);
};
