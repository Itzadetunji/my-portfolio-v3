import type { NextPage } from "next";
import React from "react";

interface SectionTitleProps {
	text: string;
}

export const SectionTitle: NextPage<SectionTitleProps> = ({ text }) => {
	return <div>{text}</div>;
};
