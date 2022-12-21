import type { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

interface SmallNavItemProps {
	title: string;
	path: string;
}

export const SmallNavLink: NextPage<SmallNavItemProps> = ({ title, path }) => {
	const router = useRouter().pathname;
	return (
		<Link href={path}>
			<div className="relative flex items-center justify-center font-bold cursor-pointer">
				<h2 className={`text-white absolute z-10 text-3xl tracking-[0.05em] ${router === `${path}` ? "font-bold" : "font-regular"}`}>{title}</h2>
				<h2 className={`text-gray text-4xl tracking-[0.1em] ${router === `${path}` ? "font-bold" : "font-regular"}`}>{title}</h2>
			</div>
		</Link>
	);
};
