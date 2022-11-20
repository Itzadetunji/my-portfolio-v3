import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface NavItemProps {
	title: string;
	path: string;
	active: boolean;
}

export const NavLink: React.FC<NavItemProps> = ({ title, path, active }) => {
	return <div></div>;
};
