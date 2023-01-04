import { NextPage } from "next";
import React from "react";

interface PortfolioCardProps {
	title: string;
	location: string;
	content: string;
	stacks: Array<string>;
	live: string;
	github: string;
	img: string;
}

export const PortfolioCard: NextPage<PortfolioCardProps> = ({ title, location, content, stacks, live, github, img }) => {
	return (
		<div className="relative h-[430px]">
			<img
				src="/images/portfolio.png"
				alt=""
				className="w-full h-full object-cover opacity-25  transition-opacity duration-500 ease-in-out hover:opacity-75 rounded-md shadow-lg shadow-blue/40"
			/>
			<div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full py-8 px-4 flex flex-col items-center justify-center text-white box-border">
				<p className="text-xl font-semibold">{title}</p>
			</div>
		</div>
	);
};
