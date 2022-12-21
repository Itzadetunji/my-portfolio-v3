import type { NextPage } from "next";
import React, { useEffect } from "react";
import "../styles/notFoundPage.module.css";

const NotFoundPage: NextPage = () => {
	useEffect(() => {
		// document.body.style.backgroundImage = `url('/images/background.svg')`;
		document.body.classList.add("notFoundBody");
		// document.body.classList.add("squiggle");
	}, []);
	return (
		<div
			title="404"
			className="notFoundDiv"
		>
			404
		</div>
	);
};

export default NotFoundPage;
