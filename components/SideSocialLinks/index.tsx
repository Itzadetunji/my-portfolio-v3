import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { Line } from "../";

export const SideSocialLinks: NextPage = () => {
	return (
		<div>
			<div className="mt-5 h-[5px] w-[100px] rotate-90">
				<Line />
			</div>
		</div>
	);
};
