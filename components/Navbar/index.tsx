import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Navbar: NextPage = () => {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter().pathname;
	useEffect(() => {
		if (isOpen == true) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [isOpen]);
	return <nav></nav>;
};
