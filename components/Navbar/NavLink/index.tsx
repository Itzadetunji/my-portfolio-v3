import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface NavItemProps {
	title: string;
	path: string;
}

export const NavLink: React.FC<NavItemProps> = ({ title, path }) => {
	const router = useRouter().pathname;
	return (
		<div>
			<Link
				href={path}
				passHref
			>
				<h2 className={`text-white cursor-pointer ${router === `${path}` ? "font-bold" : "font-regular"}`}>{title}</h2>
			</Link>
		</div>
	);
};
