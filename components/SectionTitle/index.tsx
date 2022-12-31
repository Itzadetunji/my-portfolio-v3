import type { NextPage } from "next";
import React, { useState } from "react";

interface SectionTitleProps {
	text: string;
}

export const SectionTitle: NextPage<SectionTitleProps> = ({ text }) => {
	const [isHover, setIsHover] = useState<boolean>();
	return (
		<div
			className="relative text-white wide-text-animation"
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<p className={`z-0 text-center text-[56px] font-bold text-[#363C42] duration-200 ${isHover ? "tracking-widest" : "tracking-normal"}`}>{text}</p>
			<p className="absolute z-10 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-4xl font-bold">{text}</p>
		</div>
	);
};
