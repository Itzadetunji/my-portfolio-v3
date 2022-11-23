import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { Line } from "../";

export const SideSocialLinks: NextPage = () => {
	return (
		<>
			<div className="flex flex-col">
				{/* <div className="h-[5px] w-[100px]">
					<Line />
				</div> */}
				<div className="flex flex-col space-y-[30px] items-center">
					<Icon />
				</div>
			</div>
		</>
	);
};

const Icon = () => {
	return (
		<div className="bg-light-gray w-[54px] h-[54px] flex items-center justify-center">
			<img
				src="./images/social-icons/github.svg"
				alt=""
			/>
		</div>
	);
};
