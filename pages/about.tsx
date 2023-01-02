import { NextPage } from "next";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SectionTitle } from "../components";

interface AboutMeStateProps {
	selectedState: any;
}

const About: NextPage = () => {
	const [selectedState, setSelectedState] = useState<number>(1);
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<>
			<section className="flex flex-col mt-12">
				<SectionTitle text={"About Me"} />
				<div className="mt-12 flex flex-col items-center mx-[40px] sm:mx-[50px] xl:mx-[85px]">
					<div className="flex flex-col items-center justify-between lg:space-x-14 lg:flex-row w-full max-w-[1275px]">
						<div className="bg-gray w-full sm:w-[80%] md:max-w-[525px] h-[400px] rounded-md" />
						<div className="flex flex-col min-w-[50%] self-stretch justify-between space-y-5 lg:space-y-0">
							<div className="flex items-center justify-between">
								<h1 className="text-[32px] font-bold my-8 text-white leading-[45px]">I&apos;m a FULL-STACK DEVELOPER</h1>
								<div className="flex justify-between items-center h-5">
									<div
										className="relative border-white border rounded-full w-[17px] h-[17px] cursor-pointer"
										onClick={() => setSelectedState(1)}
									>
										<div className={`absolute rounded-full w-2.5 h-2.5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 ${selectedState === 1 ? "bg-white duration-[500ms] ease-in-out opacity-100" : "duration-[500ms] opacity-0 ease-in-out"}`}></div>
									</div>
									<hr className="border-white flex-1 h-[1px] min-w-[24px]" />
									<div
										className="relative border-white border rounded-full w-[17px] h-[17px] cursor-pointer"
										onClick={() => setSelectedState(2)}
									>
										<div className={`absolute rounded-full w-2.5 h-2.5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 ${selectedState === 2 ? "bg-white duration-[500ms] ease-in-out opacity-100" : "duration-[500ms] opacity-0 ease-in-out"}`}></div>
									</div>
									<hr className="border-white flex-1 h-[1px] min-w-[24px]" />
									<div
										className="relative border-white border rounded-full w-[17px] h-[17px] cursor-pointer"
										onClick={() => setSelectedState(3)}
									>
										<div className={`absolute rounded-full w-2.5 h-2.5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 ${selectedState === 3 ? "bg-white duration-[500ms] ease-in-out opacity-100" : "duration-[500ms] opacity-0 ease-in-out"}`}></div>
									</div>
								</div>
							</div>
							<article
								ref={ref}
								className="text-white min-h-fit lg:min-h-[200px] max-w-[680px]"
							>
								{selectedState === 1 && (
									<motion.p
										initial={{ opacity: 0, y: 40 }}
										animate={{ opacity: isInView && 1, y: isInView && 0 }}
										transition={{ y: { duration: 0.4 }, delay: isInView && 0.1 }}
										className="text-lg"
									>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, quibusdam quos! Provident, sapiente cupiditate nisi quaerat consectetur quod. Magnam, accusamus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, quibusdam quos! Provident, sapiente cupiditate nisi quaerat consectetur quod. Magnam, accusamus. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Fugit, quibusdam quos! Provident, sapiente cupiditate nisi quaerat consectetur quod. Magnam,
									</motion.p>
								)}
								{selectedState === 2 && (
									<motion.p
										initial={{ opacity: 0, y: 40 }}
										animate={{ opacity: isInView && 1, y: isInView && 0 }}
										transition={{ y: { duration: 0.4 }, delay: isInView && 0.1 }}
										className="text-lg"
									>
										Lorem ipsum dolor sit amet consectetur adipisicing e
									</motion.p>
								)}
								{selectedState === 3 && (
									<motion.p
										initial={{ opacity: 0, y: 40 }}
										animate={{ opacity: isInView && 1, y: isInView && 0 }}
										transition={{ y: { duration: 0.4 }, delay: isInView && 0.1 }}
										className="text-lg"
									>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quas modi temporibus officiis nobis eveniet at dolores tenetur expedita fugit?
									</motion.p>
								)}
							</article>
							<a href="">
								<button className="bg-gray px-[42px] py-[14px] w-fit rounded-md text-white font-bold select-none">Download CV</button>
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;

const AboutMeState: NextPage<AboutMeStateProps> = ({ selectedState }) => {
	const defaultState = selectedState;
	console.log(defaultState);
	return (
		<>
			<div className="relative border-white border rounded-full w-[17px] h-[17px]">
				<div className={`absolute rounded-full w-2.5 h-2.5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}></div>
			</div>
		</>
	);
};
