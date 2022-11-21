import { NextPage } from "next";
import React from "react";

interface LineTypes {
	height: string;
	length: string;
}

export const Line: NextPage<LineTypes> = ({ height, length }) => {
	return <hr className={`bg-blue w-[${length}px] h-[${height}px] bg-gray-200 rounded-full border-0`} />;
};

export default Line;
