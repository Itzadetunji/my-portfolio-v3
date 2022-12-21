import type { NextPage } from "next";
import { useEffect } from "react";
import "../styles/notFoundPage.module.css";
import { Navbar, SmallNav } from "../components";

const NotFoundPage: NextPage = () => {
	useEffect(() => {
		document.body.classList.add("notFoundBody");
	}, []);
	return (
		<>
			<section className="mx-[30px]">
				<Navbar />
			</section>
			<SmallNav />
			<section className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white flex flex-col items-center text-center ">
				<div
					title="404"
					className="notFoundDiv text-[96px]"
				>
					404
				</div>
				<p className="sm:text-xl">Please I want to know. What are you looking for? 👀 </p>
			</section>
		</>
	);
};

export default NotFoundPage;
