import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Icon, NavLink, SmallNavLink } from "../";

interface SmallNavProps {
	isOpen: boolean;
}

interface NavProps {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const Navbar: NextPage<NavProps> = ({ isOpen, setIsOpen }) => {
	useEffect(() => {
		if (isOpen == true) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [isOpen]);

	return (
		<>
			<nav className="flex flex-row items-center justify-between max-w-[1270px] mx-auto py-4">
				<div className="w-10 md:w-14 h-10 md:h-14 relative cursor-pointer z-50">
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
				<div className="sm:hidden z-50">
					<button
						onClick={() => setIsOpen(!isOpen)}
						className={`nav ${isOpen && "open"} scale-[0.75] sm:scale-100 w-16 h-16 relative p-0 bg-transparent border-none outline-none cursor-pointer`}
					>
						<span className="w-full h-[5px] bg-white block absolute rounded-[2px]"></span>
						<span className="w-full h-[5px] bg-white block absolute rounded-[2px]"></span>
						<span className="w-full h-[5px] bg-white block absolute rounded-[2px]"></span>
					</button>
				</div>
			</nav>
		</>
	);
};

export const SmallNav: NextPage<SmallNavProps> = ({ isOpen }) => {
	return (
		<div className={`fixed left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] z-10 bg-dark h-[100%] w-[100%] ${isOpen ? "block" : "hidden"} sm:hidden`}>
			<nav className="h-full text-center flex flex-col items-center justify-center space-y-[60px]">
				<div className="flex flex-col items-center space-y-[50px]">
					<SmallNavLink
						title={"Home"}
						path={"/"}
					/>
					<SmallNavLink
						title={"About"}
						path={"/about"}
					/>
					<SmallNavLink
						title={"Portfolio"}
						path={"/portfolio"}
					/>
					<SmallNavLink
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
				<footer className="text-white fixed bottom-5 flex items-center justify-between space-x-5">
					<Icon
						name={"github"}
						url={"https://github.com/itzadetunji"}
					/>
					<Icon
						name={"github"}
						url={"https://github.com/itzadetunji"}
					/>
				</footer>
			</nav>
		</div>
	);
};
