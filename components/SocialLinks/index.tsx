/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const SocialLinks: NextPage = () => {
	return (
		<div className="mx-auto w-full flex md:flex-col items-center justify-center space-x-5 sm:space-x-11 md:space-x-0 md:space-y-10">
			<div className="w-[70px] sm:rotate-90">
				<div className="border border-white animate-line" />
			</div>
			<div className="flex md:flex-col items-center space-x-5 sm:space-x-8 md:space-x-0 md:space-y-8">
				<div className="flex items-center justify-center hoverAnimation">
					<Link href={"https://twitter.com/itzadetunji1"}>
						{/* <Image
					src={"/icons/social-icons/facebook.svg"}
					width="30"
					height="30"
					alt="ds"
				/> */}
						<>
							<img
								src="./icons/social-icons/facebook.svg"
								alt=""
								className="w-7 sm:w-8 h-7 sm:h-8"
							/>
						</>
					</Link>
				</div>
				<div className="flex items-center justify-center hoverAnimation">
					<Link href={"https://instagram.com/itzadetunji"}>
						{/* <Image
					src={"/icons/social-icons/instagram.svg"}
					width="30"
					height="30"
					alt="ds"
				/> */}
						<>
							<img
								src="./icons/social-icons/instagram.svg"
								alt=""
								className="w-7 sm:w-8 h-7 sm:h-8"
							/>
						</>
					</Link>
				</div>
				<div className="flex items-center justify-center hoverAnimation">
					<Link href={"https://twitter.com/itzadetunji1"}>
						{/* <Image
					src={"/icons/social-icons/twitter.svg"}
					width="30"
					height="30"
					alt="ds"
				/> */}
						<>
							<img
								src="./icons/social-icons/twitter.svg"
								alt=""
								className="w-7 sm:w-8 h-7 sm:h-8"
							/>
						</>
					</Link>
				</div>
			</div>

			<div className="w-[70px] rotate-180 md:rotate-[-90deg]">
				<div className="border border-white animate-line" />
			</div>
		</div>
	);
};
