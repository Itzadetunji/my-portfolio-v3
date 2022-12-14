import { NextPage } from "next";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { PortfolioCard, SectionTitle } from "../components";

interface AboutMeStateProps {
	selectedState: any;
}

const About: NextPage = () => {
	const [selectedState, setSelectedState] = useState<number>(1);
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const FEStackIconList = [
		{ name: "React", path: "/icons/stack-icons/react.svg" },
		{ name: "Next", path: "/icons/stack-icons/next.svg" },
		{ name: "Tailwindcss", path: "/icons/stack-icons/tailwindcss.svg" },
		{ name: "Javascript", path: "/icons/stack-icons/javascript.svg" },
		{ name: "Vue", path: "/icons/stack-icons/vue.svg" },
		{ name: "React", path: "/icons/stack-icons/react.svg" },
		{ name: "Next", path: "/icons/stack-icons/next.svg" },
		{ name: "Tailwindcss", path: "/icons/stack-icons/tailwindcss.svg" },
		{ name: "Javascript", path: "/icons/stack-icons/javascript.svg" },
		{ name: "React", path: "/icons/stack-icons/react.svg" },
		{ name: "Next", path: "/icons/stack-icons/next.svg" },
		{ name: "Tailwindcss", path: "/icons/stack-icons/tailwindcss.svg" },
		{ name: "Javascript", path: "/icons/stack-icons/javascript.svg" },
	];
	const BEStackIconList = [
		{ name: "Node", path: "/icons/stack-icons/node.svg" },
		{ name: "Mongodb", path: "/icons/stack-icons/mongodb.svg" },
		{ name: "Express js", path: "/icons/stack-icons/express.svg" },
		{ name: "Postman", path: "/icons/stack-icons/postman.svg" },
		{ name: "MySQL", path: "/icons/stack-icons/mysql.svg" },
		{ name: "Node", path: "/icons/stack-icons/node.svg" },
		{ name: "Mongodb", path: "/icons/stack-icons/mongodb.svg" },
		{ name: "Express js", path: "/icons/stack-icons/express.svg" },
		{ name: "Postman", path: "/icons/stack-icons/postman.svg" },
		{ name: "MySQL", path: "/icons/stack-icons/mysql.svg" },
		{ name: "Node", path: "/icons/stack-icons/node.svg" },
		{ name: "Mongodb", path: "/icons/stack-icons/mongodb.svg" },
	];
	return (
		<>
			<section className="flex flex-col items-center px-5 sm:px-[50px] xl:px-[85px] mt-20">
				<div className="flex flex-col space-y-12 w-full max-w-[1275px]">
					<SectionTitle text={"About Me"} />
					<div className="flex flex-col items-center justify-between lg:space-x-14 lg:flex-row min-w-full">
						<div className="bg-gray w-full sm:w-[80%] md:max-w-[525px] h-[200px] sm:h-[400px] rounded-md" />
						<div className="flex flex-col min-w-[50%] self-stretch justify-between space-y-5 lg:space-y-0">
							<div className="flex items-center justify-between">
								<h1 className="text-3xl sm:text-[32px] font-bold my-8 text-white leading-[45px]">I&apos;m a FULL-STACK DEVELOPER</h1>
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
								className="text-white text-base sm:text-lg min-h-fit lg:min-h-[200px] max-w-[680px]"
							>
								{selectedState === 1 && (
									<motion.p
										initial={{ opacity: 0, y: 40 }}
										animate={{ opacity: isInView && 1, y: isInView && 0 }}
										transition={{ y: { duration: 0.4 }, delay: isInView && 0.1 }}
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
									>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, quibusdam quos! Provident, sapiente cupiditate nisi quaerat consectetur quod. Magnam, accusamus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, quibusdam quos! Provident, sapiente cupiditate nisi quaerat consectetur quod. Magnam, accusamus. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Fugit, quibusdam quos! Provident, sapiente cupiditate nisi quaerat consectetur quod. Magnam,
									</motion.p>
								)}
								{selectedState === 3 && (
									<motion.p
										initial={{ opacity: 0, y: 40 }}
										animate={{ opacity: isInView && 1, y: isInView && 0 }}
										transition={{ y: { duration: 0.4 }, delay: isInView && 0.1 }}
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
			{/* <section className="flex flex-col items-center px-5 sm:px-[50px] xl:px-[85px] mt-40">
				<div className="flex flex-col space-y-12 w-full max-w-[1275px]">
					<SectionTitle text={"My Tech Stack"} />
					<div className="flex flex-col justify-center items-center lg:flex-row lg:space-x-10 w-full">
						<article className="flex flex-col space-y-10">
							<p className="text-xl text-white min-w-[50%]">Here are some of the technological advancements that have a place in my heart ????</p>
							<figure className="overflow-hidden -mx-10 xs:mx-0">
								<figcaption className="text-white mx-10 xs:mx-0">Frontend:</figcaption>
								<div className="flex space-x-7 techStackCarousel1 relative">
									{FEStackIconList.slice(0, 5).map((stack, index) => (
										<img
											src={stack.path}
											className="w-20 h-20 mt-4 rounded-md hidden md:block"
											alt={stack.name}
											key={index}
											title={stack.name}
										/>
									))}
									{FEStackIconList.map((stack, index) => (
										<img
											src={stack.path}
											className="w-20 h-20 mt-4 rounded-md md:hidden"
											alt={stack.name}
											key={index}
											title={stack.name}
										/>
									))}
								</div>
							</figure>
							<figure className="overflow-hidden -mx-10 xs:mx-0">
								<figcaption className="text-white mx-10 xs:mx-0">Backend:</figcaption>
								<div className="flex space-x-7 techStackCarousel2 relative">
									{BEStackIconList.slice(0, 5).map((stack, index) => (
										<img
											src={stack.path}
											className="w-20 h-20 mt-4 rounded-md hidden md:block"
											alt={stack.name}
											key={index}
											title={stack.name}
										/>
									))}
									{BEStackIconList.map((stack, index) => (
										<img
											src={stack.path}
											className="w-20 h-20 mt-4 rounded-md md:hidden"
											alt={stack.name}
											key={index}
											title={stack.name}
										/>
									))}
								</div>
							</figure>
						</article>
						<svg
							width="557"
							height="596"
							viewBox="0 0 557 596"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="w-full min-w-[50%] md:max-w-[50%]"
						>
							<g clipPath="url(#clip0_1378_355)">
								<g filter="url(#filter0_d_1378_355)">
									<line
										x1="422.515"
										y1="480.981"
										x2="285.375"
										y2="527.151"
										stroke="black"
										strokeWidth="5"
									/>
								</g>
								<g filter="url(#filter1_d_1378_355)">
									<line
										x1="289.057"
										y1="528.315"
										x2="102.379"
										y2="480.422"
										stroke="black"
										strokeWidth="5"
									/>
								</g>
								<g filter="url(#filter2_d_1378_355)">
									<path
										d="M427.379 256.489C427.307 256.363 427.181 256.3 427.109 256.183C426.83 255.77 426.507 255.42 426.13 255.087C426.004 254.997 425.923 254.898 425.806 254.818C425.204 254.368 424.539 254 423.785 253.829L238.255 210.389C237.284 210.174 236.224 210.219 235.236 210.524L102.894 253.955C102.517 254.09 102.22 254.341 101.888 254.539C101.672 254.665 101.412 254.692 101.223 254.836C101.169 254.88 101.142 254.961 101.088 255.006C101.034 255.06 100.944 255.069 100.89 255.132L32.8508 316.317C30.8562 318.131 30.416 321.105 31.8086 323.396C32.8148 325.076 34.6567 326.119 36.6153 326.119C37.2981 326.119 37.954 325.993 38.5739 325.768L99.0396 303.235V484.39C99.0396 486.959 100.774 489.196 103.271 489.816L282.575 535.566C283.006 535.691 283.474 535.754 283.995 535.754C284.615 535.754 285.226 535.655 285.81 535.467L419.993 489.7C422.275 488.936 423.803 486.798 423.803 484.39V367.025L473.217 349.919C474.808 349.362 476.048 348.158 476.641 346.585C477.234 345.013 477.099 343.288 476.254 341.824L427.379 256.489ZM99.0217 291.223L62.311 304.915L99.0217 271.879V291.223ZM278.361 522.906L110.261 480.023V266.605L278.361 311.636V522.906ZM283.788 301.447L124.322 258.735L237.239 221.683L402.348 260.334L283.788 301.447ZM412.554 480.365L289.592 522.286V319.048L339.968 391.724C341.028 393.233 342.753 394.149 344.595 394.149C345.179 394.149 345.799 394.042 346.437 393.844L412.554 370.933V480.365ZM346.778 381.805L296.295 308.994L419.948 266.12L463.119 341.518L346.778 381.805Z"
										fill="#363C42"
									/>
								</g>
								<path
									d="M109.329 264.566L279.924 308.33L279.924 524.919L105.984 483.663L109.329 264.566Z"
									fill="#363C42"
								/>
								<path
									d="M287.729 312.79L343.479 393.349L415.675 368.54V484.5L285.499 525.755L287.729 312.79Z"
									fill="#363C42"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M177.673 383.084C179.444 382.092 180.087 379.846 179.112 378.066L179.079 378.006C178.103 376.226 175.878 375.588 174.107 376.58L157.869 385.678C156.098 386.671 155.453 388.921 156.429 390.701L165.379 407.021C166.355 408.801 168.579 409.439 170.35 408.446L170.41 408.413C172.181 407.421 172.824 405.175 171.849 403.395L166.468 393.579C165.492 391.799 166.137 389.549 167.908 388.557L177.673 383.084ZM223.869 404.604L214.92 388.283C213.947 386.504 211.719 385.865 209.948 386.857L209.888 386.891C208.118 387.884 207.474 390.129 208.449 391.909L213.834 401.726C214.809 403.506 214.164 405.756 212.393 406.748L202.625 412.22C200.855 413.213 200.211 415.458 201.186 417.238L201.219 417.298C202.195 419.078 204.424 419.717 206.191 418.723L222.429 409.626C224.2 408.633 224.845 406.384 223.869 404.604ZM206.981 383.693L177.722 417.289C176.785 418.341 175.322 419.552 173.993 419.171L173.922 419.151C171.337 418.409 170.659 414.415 172.481 412.375L201.528 379.116C202.464 378.069 204.915 377.739 204.915 377.739L204.941 377.649C208.459 378.658 208.799 381.653 206.981 383.693Z"
									fill="white"
								/>
							</g>
							<path
								d="M282.5 0C251.305 0 226 25.305 226 56.5C226 87.695 251.305 113 282.5 113C313.695 113 339 87.695 339 56.5C339 25.305 313.695 0 282.5 0Z"
								fill="#368FB9"
							/>
							<path
								d="M315.746 76.8311C312.255 77.6601 310.488 78.4236 306.169 81.2377C299.428 85.6006 292.055 87.6294 292.055 87.6294C292.055 87.6294 291.444 88.5456 289.677 88.9601C286.623 89.7018 275.127 90.3344 274.08 90.3562C271.266 90.378 269.542 89.6363 269.062 88.4802C267.601 84.9898 271.157 83.4628 271.157 83.4628C271.157 83.4628 270.371 82.9829 269.913 82.5466C269.499 82.1321 269.062 81.3031 268.931 81.6085C268.386 82.9392 268.102 86.1896 266.641 87.6512C264.634 89.68 260.838 89.0037 258.591 87.8257C256.126 86.5168 258.766 83.441 258.766 83.441C258.766 83.441 257.435 84.2263 256.366 82.612C255.406 81.1286 254.512 78.5981 254.752 75.4786C255.014 71.9228 258.984 68.4761 258.984 68.4761C258.984 68.4761 258.286 63.2188 260.576 57.8305C262.649 52.9222 268.233 48.9738 268.233 48.9738C268.233 48.9738 263.543 43.7819 265.288 39.1136C266.423 36.0595 266.881 36.0813 267.252 35.9504C268.561 35.4487 269.826 34.9033 270.764 33.878C275.454 28.817 281.431 29.7769 281.431 29.7769C281.431 29.7769 284.267 21.1601 286.885 22.8398C287.692 23.3634 290.593 29.8205 290.593 29.8205C290.593 29.8205 293.691 28.0099 294.04 28.6861C295.916 32.3292 296.134 39.2881 295.305 43.5201C293.909 50.5008 290.419 54.2529 289.023 56.6089C288.696 57.1543 292.775 58.8776 295.349 66.011C297.727 72.5336 295.611 78.0091 295.982 78.6199C296.047 78.729 296.069 78.7726 296.069 78.7726C296.069 78.7726 298.796 78.9908 304.271 75.6095C307.194 73.7989 310.663 71.7701 314.611 71.7265C318.429 71.661 318.625 76.133 315.746 76.8311ZM320.938 73.6244C320.545 70.5267 317.927 68.3888 314.568 68.4325C309.55 68.4979 305.34 71.0939 302.548 72.8172C301.457 73.4935 300.519 73.9952 299.712 74.3661C299.886 71.8356 299.734 68.5197 298.425 64.8767C296.832 60.5137 294.695 57.8305 293.168 56.2817C294.935 53.7076 297.356 49.9555 298.49 44.1527C299.472 39.2008 299.167 31.5002 296.92 27.1809C296.462 26.3083 295.698 25.6757 294.738 25.4139C294.346 25.3049 293.604 25.0867 292.142 25.5012C289.939 20.9419 289.175 20.462 288.586 20.0693C287.365 19.284 285.925 19.1095 284.573 19.6112C282.762 20.2657 281.213 22.0109 279.751 25.1085C279.533 25.5666 279.337 26.0029 279.163 26.4392C276.392 26.6356 272.029 27.639 268.342 31.6311C267.884 32.1329 266.99 32.5037 266.052 32.8527H266.074C264.154 33.529 263.281 35.0997 262.213 37.9356C260.729 41.9058 262.256 45.8107 263.761 48.3412C261.711 50.1736 258.984 53.0968 257.544 56.5217C255.755 60.7537 255.559 64.8985 255.624 67.1454C254.097 68.7597 251.741 71.7919 251.48 75.195C251.131 79.9506 252.854 83.1792 253.618 84.3572C253.836 84.7062 254.076 84.9898 254.337 85.2734C254.25 85.8624 254.228 86.495 254.359 87.1495C254.643 88.6765 255.603 89.9199 257.064 90.7053C259.944 92.2323 263.958 92.8867 267.055 91.3379C268.168 92.5159 270.197 93.6502 273.883 93.6502H274.102C275.04 93.6502 286.95 93.0176 290.419 92.1668C291.968 91.796 293.037 91.1415 293.735 90.5526C295.96 89.8545 302.112 87.7603 307.914 84.0081C312.015 81.3468 313.433 80.7796 316.487 80.0379C319.454 79.318 321.308 76.613 320.938 73.6244Z"
								fill="white"
							/>
							<path
								d="M56.5 113C25.305 113 0 138.305 0 169.5C0 200.695 25.305 226 56.5 226C87.695 226 113 200.695 113 169.5C113 138.305 87.695 113 56.5 113Z"
								fill="#368FB9"
							/>
							<path
								d="M89.7457 189.831C86.2554 190.66 84.4884 191.424 80.1691 194.238C73.4283 198.601 66.055 200.629 66.055 200.629C66.055 200.629 65.4442 201.546 63.6772 201.96C60.6231 202.702 49.1268 203.334 48.0797 203.356C45.2656 203.378 43.5422 202.636 43.0623 201.48C41.6007 197.99 45.1565 196.463 45.1565 196.463C45.1565 196.463 44.3712 195.983 43.9131 195.547C43.4986 195.132 43.0623 194.303 42.9314 194.609C42.3861 195.939 42.1025 199.19 40.6409 200.651C38.6339 202.68 34.8382 202.004 32.5913 200.826C30.1262 199.517 32.7658 196.441 32.7658 196.441C32.7658 196.441 31.4351 197.226 30.3662 195.612C29.4063 194.129 28.5119 191.598 28.7519 188.479C29.0137 184.923 32.9839 181.476 32.9839 181.476C32.9839 181.476 32.2859 176.219 34.5764 170.831C36.6488 165.922 42.2334 161.974 42.2334 161.974C42.2334 161.974 37.5432 156.782 39.2884 152.114C40.4227 149.06 40.8808 149.081 41.2517 148.95C42.5606 148.449 43.8258 147.903 44.7639 146.878C49.454 141.817 55.4312 142.777 55.4312 142.777C55.4312 142.777 58.2671 134.16 60.8849 135.84C61.692 136.363 64.5934 142.821 64.5934 142.821C64.5934 142.821 67.6911 141.01 68.0401 141.686C69.9162 145.329 70.1343 152.288 69.3054 156.52C67.9092 163.501 64.4189 167.253 63.0227 169.609C62.6955 170.154 66.7749 171.878 69.349 179.011C71.7268 185.534 69.6108 191.009 69.9816 191.62C70.0471 191.729 70.0689 191.773 70.0689 191.773C70.0689 191.773 72.7957 191.991 78.2712 188.61C81.1944 186.799 84.6629 184.77 88.6113 184.726C92.4289 184.661 92.6252 189.133 89.7457 189.831ZM94.9376 186.624C94.5449 183.527 91.9272 181.389 88.5677 181.432C83.5503 181.498 79.3401 184.094 76.5478 185.817C75.4571 186.493 74.5191 186.995 73.7119 187.366C73.8864 184.836 73.7337 181.52 72.4249 177.877C70.8324 173.514 68.6945 170.831 67.1675 169.282C68.9345 166.708 71.3559 162.955 72.4903 157.153C73.472 152.201 73.1666 144.5 70.9196 140.181C70.4615 139.308 69.698 138.676 68.7382 138.414C68.3455 138.305 67.6038 138.087 66.1422 138.501C63.9389 133.942 63.1754 133.462 62.5864 133.069C61.3648 132.284 59.925 132.11 58.5725 132.611C56.7619 133.266 55.2131 135.011 53.7515 138.109C53.5334 138.567 53.337 139.003 53.1625 139.439C50.392 139.636 46.0291 140.639 42.3424 144.631C41.8843 145.133 40.9899 145.504 40.0519 145.853H40.0737C38.154 146.529 37.2814 148.1 36.2125 150.936C34.7291 154.906 36.2561 158.811 37.7613 161.341C35.7108 163.174 32.9839 166.097 31.5442 169.522C29.7554 173.754 29.559 177.898 29.6245 180.145C28.0974 181.76 25.7415 184.792 25.4797 188.195C25.1306 192.951 26.854 196.179 27.6175 197.357C27.8357 197.706 28.0756 197.99 28.3374 198.273C28.2501 198.862 28.2283 199.495 28.3592 200.149C28.6428 201.676 29.6027 202.92 31.0642 203.705C33.9438 205.232 37.9577 205.887 41.0554 204.338C42.1679 205.516 44.1967 206.65 47.8834 206.65H48.1015C49.0395 206.65 60.9503 206.018 64.4189 205.167C65.9677 204.796 67.0366 204.142 67.7347 203.553C69.9598 202.854 76.1115 200.76 81.9142 197.008C86.0154 194.347 87.4333 193.78 90.4874 193.038C93.4542 192.318 95.3084 189.613 94.9376 186.624Z"
								fill="white"
							/>
							<path
								d="M500.5 128C469.305 128 444 153.305 444 184.5C444 215.695 469.305 241 500.5 241C531.695 241 557 215.695 557 184.5C557 153.305 531.695 128 500.5 128Z"
								fill="#368FB9"
							/>
							<path
								d="M533.746 204.831C530.255 205.66 528.488 206.424 524.169 209.238C517.428 213.601 510.055 215.629 510.055 215.629C510.055 215.629 509.444 216.546 507.677 216.96C504.623 217.702 493.127 218.334 492.08 218.356C489.266 218.378 487.542 217.636 487.062 216.48C485.601 212.99 489.157 211.463 489.157 211.463C489.157 211.463 488.371 210.983 487.913 210.547C487.499 210.132 487.062 209.303 486.931 209.609C486.386 210.939 486.102 214.19 484.641 215.651C482.634 217.68 478.838 217.004 476.591 215.826C474.126 214.517 476.766 211.441 476.766 211.441C476.766 211.441 475.435 212.226 474.366 210.612C473.406 209.129 472.512 206.598 472.752 203.479C473.014 199.923 476.984 196.476 476.984 196.476C476.984 196.476 476.286 191.219 478.576 185.831C480.649 180.922 486.233 176.974 486.233 176.974C486.233 176.974 481.543 171.782 483.288 167.114C484.423 164.06 484.881 164.081 485.252 163.95C486.561 163.449 487.826 162.903 488.764 161.878C493.454 156.817 499.431 157.777 499.431 157.777C499.431 157.777 502.267 149.16 504.885 150.84C505.692 151.363 508.593 157.821 508.593 157.821C508.593 157.821 511.691 156.01 512.04 156.686C513.916 160.329 514.134 167.288 513.305 171.52C511.909 178.501 508.419 182.253 507.023 184.609C506.696 185.154 510.775 186.878 513.349 194.011C515.727 200.534 513.611 206.009 513.982 206.62C514.047 206.729 514.069 206.773 514.069 206.773C514.069 206.773 516.796 206.991 522.271 203.61C525.194 201.799 528.663 199.77 532.611 199.726C536.429 199.661 536.625 204.133 533.746 204.831ZM538.938 201.624C538.545 198.527 535.927 196.389 532.568 196.432C527.55 196.498 523.34 199.094 520.548 200.817C519.457 201.493 518.519 201.995 517.712 202.366C517.886 199.836 517.734 196.52 516.425 192.877C514.832 188.514 512.695 185.831 511.168 184.282C512.935 181.708 515.356 177.955 516.49 172.153C517.472 167.201 517.167 159.5 514.92 155.181C514.462 154.308 513.698 153.676 512.738 153.414C512.346 153.305 511.604 153.087 510.142 153.501C507.939 148.942 507.175 148.462 506.586 148.069C505.365 147.284 503.925 147.11 502.573 147.611C500.762 148.266 499.213 150.011 497.751 153.109C497.533 153.567 497.337 154.003 497.163 154.439C494.392 154.636 490.029 155.639 486.342 159.631C485.884 160.133 484.99 160.504 484.052 160.853H484.074C482.154 161.529 481.281 163.1 480.213 165.936C478.729 169.906 480.256 173.811 481.761 176.341C479.711 178.174 476.984 181.097 475.544 184.522C473.755 188.754 473.559 192.898 473.624 195.145C472.097 196.76 469.741 199.792 469.48 203.195C469.131 207.951 470.854 211.179 471.618 212.357C471.836 212.706 472.076 212.99 472.337 213.273C472.25 213.862 472.228 214.495 472.359 215.149C472.643 216.676 473.603 217.92 475.064 218.705C477.944 220.232 481.958 220.887 485.055 219.338C486.168 220.516 488.197 221.65 491.883 221.65H492.102C493.04 221.65 504.95 221.018 508.419 220.167C509.968 219.796 511.037 219.142 511.735 218.553C513.96 217.854 520.112 215.76 525.914 212.008C530.015 209.347 531.433 208.78 534.487 208.038C537.454 207.318 539.308 204.613 538.938 201.624Z"
								fill="white"
							/>
							<defs>
								<filter
									id="filter0_d_1378_355"
									x="244.577"
									y="449.611"
									width="218.736"
									height="130.909"
									filterUnits="userSpaceOnUse"
									colorInterpolationFilters="sRGB"
								>
									<feFlood
										floodOpacity="0"
										result="BackgroundImageFix"
									/>
									<feColorMatrix
										in="SourceAlpha"
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
										result="hardAlpha"
									/>
									<feOffset dy="11" />
									<feGaussianBlur stdDeviation="20" />
									<feComposite
										in2="hardAlpha"
										operator="out"
									/>
									<feColorMatrix
										type="matrix"
										values="0 0 0 0 0.360784 0 0 0 0 0.745098 0 0 0 0 1 0 0 0 1 0"
									/>
									<feBlend
										mode="normal"
										in2="BackgroundImageFix"
										result="effect1_dropShadow_1378_355"
									/>
									<feBlend
										mode="normal"
										in="SourceGraphic"
										in2="effect1_dropShadow_1378_355"
										result="shape"
									/>
								</filter>
								<filter
									id="filter1_d_1378_355"
									x="61.7578"
									y="449"
									width="267.921"
									height="132.737"
									filterUnits="userSpaceOnUse"
									colorInterpolationFilters="sRGB"
								>
									<feFlood
										floodOpacity="0"
										result="BackgroundImageFix"
									/>
									<feColorMatrix
										in="SourceAlpha"
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
										result="hardAlpha"
									/>
									<feOffset dy="11" />
									<feGaussianBlur stdDeviation="20" />
									<feComposite
										in2="hardAlpha"
										operator="out"
									/>
									<feColorMatrix
										type="matrix"
										values="0 0 0 0 0.360784 0 0 0 0 0.745098 0 0 0 0 1 0 0 0 1 0"
									/>
									<feBlend
										mode="normal"
										in2="BackgroundImageFix"
										result="effect1_dropShadow_1378_355"
									/>
									<feBlend
										mode="normal"
										in="SourceGraphic"
										in2="effect1_dropShadow_1378_355"
										result="shape"
									/>
								</filter>
								<filter
									id="filter2_d_1378_355"
									x="26.999"
									y="210.255"
									width="454.005"
									height="333.499"
									filterUnits="userSpaceOnUse"
									colorInterpolationFilters="sRGB"
								>
									<feFlood
										floodOpacity="0"
										result="BackgroundImageFix"
									/>
									<feColorMatrix
										in="SourceAlpha"
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
										result="hardAlpha"
									/>
									<feOffset dy="4" />
									<feGaussianBlur stdDeviation="2" />
									<feComposite
										in2="hardAlpha"
										operator="out"
									/>
									<feColorMatrix
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
									/>
									<feBlend
										mode="normal"
										in2="BackgroundImageFix"
										result="effect1_dropShadow_1378_355"
									/>
									<feBlend
										mode="normal"
										in="SourceGraphic"
										in2="effect1_dropShadow_1378_355"
										result="shape"
									/>
								</filter>
								<clipPath id="clip0_1378_355">
									<rect
										width="446"
										height="446"
										fill="white"
										transform="translate(31 150)"
									/>
								</clipPath>
							</defs>
						</svg>
					</div>
				</div>
			</section>*/}
			<section className="flex flex-col items-center px-5 sm:px-[50px] xl:px-[85px] mt-40">
				<div className="flex flex-col space-y-12 w-full max-w-[1275px]">
					<SectionTitle text={"My Portfolio"} />
					<PortfolioCard
						title={"Coverly: Cover Letter"}
						location={"HNGi9"}
						content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
						stacks={["React", "Express", "Azure"]}
						live={"https://google.com"}
						github={"https://github.com/itzadetunji"}
						img={"/images/portfolio.png"}
					/>
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
