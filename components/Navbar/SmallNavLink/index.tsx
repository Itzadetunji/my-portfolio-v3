import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

interface SmallNavItemProps {
	title: string;
	path: string;
}

export const SmallNavLink: React.FC<SmallNavItemProps> = ({ title, path }) => {
	const router = useRouter().pathname;
	return (
		<Link href={path}>
			<div className="relative">
				<h2 className={`text-white ${router === `${path}` ? "font-bold" : "font-regular"}`}>{title}</h2>
			</div>
		</Link>
	);
};
