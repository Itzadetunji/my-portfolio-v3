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
			<div className="flex justify-center">
				<div className="mx-[40px] sm:mx-[50px] xl:mx-[85px] max-w-[1275px]">
					<section className="mt-12 text-white">
						<SectionTitle text={"About Me"} />
						<div className="pt-16 flex items-center space-x-[60px] justify-between">
							<div className="flex-1 bg-gray max-w-[525px] min-h-[400px] rounded-md" />
							<div className="flex flex-col flex-1">
								<div className="flex items-center justify-between">
									<h1 className="text-[32px] font-bold my-8">I&apos;m a FULL-STACK DEVELOPER</h1>
									<div className="flex justify-between items-center h-5">
										<div
											className="relative border-white border rounded-full w-[17px] h-[17px] cursor-pointer"
											onClick={() => setSelectedState(1)}
										>
											<div className={`absolute rounded-full w-2.5 h-2.5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 ${selectedState === 1 ? "bg-white duration-[500ms] ease-in-out opacity-100" : "duration-[500ms] opacity-0 ease-in-out"}`}></div>
										</div>
										<hr className="bg-white flex-1 h-[1px] min-w-[24px]" />
										<div
											className="relative border-white border rounded-full w-[17px] h-[17px] cursor-pointer"
											onClick={() => setSelectedState(2)}
										>
											<div className={`absolute rounded-full w-2.5 h-2.5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 ${selectedState === 2 ? "bg-white duration-[500ms] ease-in-out opacity-100" : "duration-[500ms] opacity-0 ease-in-out"}`}></div>
										</div>
										<hr className="bg-white flex-1 h-[1px] min-w-[24px]" />
										<div
											className="relative border-white border rounded-full w-[17px] h-[17px] cursor-pointer"
											onClick={() => setSelectedState(3)}
										>
											<div className={`absolute rounded-full w-2.5 h-2.5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 ${selectedState === 3 ? "bg-white duration-[500ms] ease-in-out opacity-100" : "duration-[500ms] opacity-0 ease-in-out"}`}></div>
										</div>
									</div>
								</div>
								<article ref={ref}>
									{selectedState === 1 && (
										<motion.p
											initial={{ opacity: 0, y: 40 }}
											animate={{ opacity: isInView && 1, y: isInView && 0 }}
											transition={{ y: { duration: 0.4 }, delay: isInView && 0.1 }}
											className="text-lg"
										>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quas modi temporibus officiis nobis eveniet at dolores tenetur expedita fugit?
										</motion.p>
									)}
									{/* {selectedState === 1 && (
										<p
											className="text-lg"
											data-aos="fade-up"
											data-aos-easing="ease-in-sine"
											data-aos-once="true"
										>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quas modi temporibus officiis nobis eveniet at dolores tenetur expedita fugit?
										</p>
									)}
									*/}
									{selectedState === 2 && (
										<motion.p
											initial={{ opacity: 0, y: 40 }}
											animate={{ opacity: isInView && 1, y: isInView && 0 }}
											transition={{ y: { duration: 0.4 }, delay: isInView && 0.1 }}
											className="text-lg"
										>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quas modi temporibus officiis nobis eveniet at dolores tenetur expedita fugit?
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
							</div>
						</div>
					</section>
				</div>
			</div>
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
