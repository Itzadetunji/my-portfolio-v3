import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { NavLink, SmallNavLink } from "../";

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
		<>
			<nav className="flex flex-row items-center justify-center max-w-[1270px] mx-auto py-4">
				<div className="w-10 md:w-14 h-10 md:h-14 relative cursor-pointer">
					<Image
						src="/images/logo.svg"
						alt="Adetunji's Logo"
						layout="fill"
						objectFit="contain"
					/>
				</div>
				<div className="hidden sm:flex space-x-11 justify-self-center ">
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
				<div className="w-10 md:w-14 h-10 md:h-14 relative cursor-pointer hidden sm:block">
					<Image
						src="/images/headphones.svg"
						alt="Adetunji's Logo"
						layout="fill"
						objectFit="contain"
					/>
				</div>
				<div className="sm:hidden">
					<button
						onClick={() => {
							setNavIcon(!navIcon);
						}}
						className={`nav ${navIcon && "open"} scale-[0.75] sm:scale-100 w-16 h-16 relative p-0 bg-transparent border-none outline-none cursor-pointer`}
					>
						<span className="w-full h-[5px] bg-white block absolute rounded-[2px]"></span>
						<span className="w-full h-[5px] bg-white block absolute rounded-[2px]"></span>
						<span className="w-full h-[5px] bg-white block absolute rounded-[2px]"></span>
					</button>
				</div>
			</nav>
			{/* <SmallNav /> */}
		</>
	);
};

export const SmallNav: NextPage = () => {
	return (
		<nav className="bg-red">
			<SmallNavLink
				title={"Home"}
				path={"/"}
			/>
		</nav>
	);
};
