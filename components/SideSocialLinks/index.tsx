import { motion } from "framer-motion";
import { NextPage } from "next";
import React, { useState } from "react";
import { Line } from "../";

export const SideSocialLinks: NextPage = () => {
	return (
		<>
			<div className="flex flex-col">
				{/* <div className="h-[5px] w-[100px]">
					<Line />
				</div> */}
				<div className="flex flex-col space-y-[30px] items-center">
					<Icon
						name={"github"}
						url={"https://github.com/itzadetunji"}
					/>
					<Icon
						name={"facebook"}
						url={"https://www.facebook.com/adetunji.adeyinka.1238"}
					/>
					<Icon
						name={"instagram"}
						url={"https://instagram.com/itzadetunji"}
					/>
					<Icon
						name={"linkedin"}
						url={"https://linkedin.com/in/itzadetunji"}
					/>
					<Icon
						name={"twitter"}
						url={"https://twittter.com/itzadetunji1"}
					/>
				</div>
			</div>
		</>
	);
};

interface IconProps {
	name: string;
	url: string;
}

const Icon: NextPage<IconProps> = ({ name, url }) => {
	const [isHovered, setHovered] = useState(false);
	return (
		<motion.a
			href={url}
			rel="noopener noreferrer"
			className=""
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<div className="relative w-[54px] h-[54px] flex items-center justify-center cursor-pointer">
				<img
					className="w-6 h-6"
					src={`./images/social-icons/${name}.svg`}
					alt=""
				/>
				<motion.svg
					className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] -z-10"
					animate={{ rotate: isHovered ? 90 : 0, y: -27, x: -24, duration: 1 }}
					width="48"
					height="54"
					viewBox="0 0 48 54"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M20.6136 1.72522C22.5365 0.615045 24.9055 0.615046 26.8284 1.72522L44.0261 11.6543C45.949 12.7645 47.1335 14.8162 47.1335 17.0365V36.8947C47.1335 39.1151 45.949 41.1668 44.0261 42.2769L26.8284 52.206C24.9055 53.3162 22.5365 53.3162 20.6136 52.206L3.41587 42.2769C1.49299 41.1668 0.308456 39.1151 0.308456 36.8947V17.0365C0.308456 14.8162 1.49299 12.7645 3.41587 11.6543L20.6136 1.72522Z"
						fill="#363C42"
					/>
				</motion.svg>
			</div>
		</motion.a>
	);
};
