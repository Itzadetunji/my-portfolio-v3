import type { NextPage } from "next";
import React, { useState } from "react";

interface SectionTitleProps {
	text: string;
}

export const SectionTitle: NextPage<SectionTitleProps> = ({ text }) => {
	const [isHover, setIsHover] = useState<boolean>();
	return (
		<div className="relative text-white wide-text-animation cursor-default">
			<p className={`absolute z-0 text-center top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] font-bold text-[#363C42] duration-200 ease-in-out sm:whitespace-nowrap ${isHover ? "text-[56px] tracking-widest" : " text-4xl tracking-normal"}`}>{text}</p>
			<p
				className="absolute z-1 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-4xl font-bold text-center"
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
			>
				{text}
			</p>
		</div>
	);
};
