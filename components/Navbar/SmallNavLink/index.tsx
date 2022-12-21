import type { NextPage } from "next";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

interface SmallNavItemProps {
	title: string;
	path: string;
}

export const SmallNavLink: NextPage<SmallNavItemProps> = ({ title, path }) => {
	const router = useRouter().pathname;
	const [isShown, setIsShown] = useState(false);
	return (
		<Link href={path}>
			<div className="relative flex items-center justify-center font-bold cursor-pointer">
				<h2
					className={`text-white z-10 text-3xl tracking-[0.05em] ${router === `${path}` ? "font-bold" : "font-regular"}`}
					onMouseEnter={() => setIsShown(true)}
					onMouseLeave={() => setIsShown(false)}
				>
					{title}
				</h2>
				<h2 className={`text-gray text-3xl absolute tracking-[0.05em] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] ${router === `${path}` ? "font-bold" : "font-regular"}  ${isShown ? "duration-200 tracking-[0.2em] text-5xl ease-in-out" : "tracking-[0.05em] duration-[450ms] ease-in-out"}`}>{title}</h2>
			</div>
		</Link>
	);
};
