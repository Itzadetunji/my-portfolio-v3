import type { NextPage } from "next";
import Image from "next/image";

interface PortfolioCardProps {
	title: string;
	location: string;
	content: string;
	stacks: Array<string>;
	live: string;
	github: string;
	img: string;
}

export const PortfolioCard: NextPage<PortfolioCardProps> = ({ title, location, content, stacks, live, github, img }) => {
	return (
		<div className="relative h-fit portfolio-container">
			<div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-0 object-cover opacity-25 rounded-md w-full h-full img-container">
				<Image
					src={"/images/portfolio.png"}
					alt="Arrow Icon"
					layout="fill"
					objectFit="cover"
					className="rounded"
				/>
			</div>
			<div className="w-full py-8 px-4 flex flex-col justify-between text-white box-border space-y-10">
				<div className="flex flex-col space-y-2">
					<p className="text-xl font-semibold">{title}</p>
					<p className="text-sm font-light">{location}</p>
				</div>
				<p className="text-lg">{content}</p>
				<div className="flex flex-col space-y-5">
					<div className="flex space-x-1">
						{stacks.map((stack, index) => (
							<p key={index}>
								{stack} <span className="text-blue">{!(stacks.length - 1 == index) && "|"}</span>
							</p>
						))}
					</div>
					<div className="flex space-x-6">
						<a
							href={live}
							rel="noopener noreferrer"
							target="_blank"
						>
							<figure>
								<svg
									width="30"
									height="30"
									viewBox="0 0 30 30"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M22.5 16.25V23.75C22.5 24.413 22.2366 25.0489 21.7678 25.5178C21.2989 25.9866 20.663 26.25 20 26.25H6.25C5.58696 26.25 4.95107 25.9866 4.48223 25.5178C4.01339 25.0489 3.75 24.413 3.75 23.75V10C3.75 9.33696 4.01339 8.70107 4.48223 8.23223C4.95107 7.76339 5.58696 7.5 6.25 7.5H13.75"
										stroke="white"
										strokeWidth="3"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M18.75 3.75H26.25V11.25"
										stroke="white"
										strokeWidth="3"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M12.5 17.5L26.25 3.75"
										stroke="white"
										strokeWidth="3"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</figure>
						</a>
						<a
							href={github}
							rel="noopener noreferrer"
							target="_blank"
						>
							<figure>
								<svg
									width="30"
									height="30"
									viewBox="0 0 30 30"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clipPath="url(#clip0_1402_55)">
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M15.0005 0C23.2847 0 29.9999 6.88489 29.9999 15.3794C29.9999 22.1729 25.7071 27.9359 19.7508 29.9714C18.9903 30.1229 18.7203 29.6427 18.7203 29.2332C18.7203 28.7262 18.7383 27.0702 18.7383 25.0122C18.7383 23.5782 18.2584 22.6423 17.7199 22.1653C21.0603 21.7843 24.5701 20.4837 24.5701 14.5767C24.5701 12.8967 23.9881 11.5257 23.0252 10.4487C23.1812 10.0602 23.6957 8.49593 22.8782 6.37793C22.8782 6.37793 21.6212 5.96583 18.7578 7.95483C17.5594 7.61433 16.2754 7.44301 15.0005 7.43701C13.7255 7.44301 12.443 7.61433 11.2461 7.95483C8.37969 5.96583 7.11973 6.37793 7.11973 6.37793C6.30526 8.49593 6.81974 10.0602 6.97424 10.4487C6.01577 11.5257 5.42929 12.8967 5.42929 14.5767C5.42929 20.4687 8.93167 21.7892 12.2631 22.1777C11.8341 22.5617 11.4456 23.2391 11.3106 24.2336C10.4556 24.6266 8.28369 25.3068 6.94573 22.9563C6.94573 22.9563 6.15226 21.4786 4.64632 21.3706C4.64632 21.3706 3.18387 21.3512 4.54432 22.3052C4.54432 22.3052 5.52679 22.7777 6.20926 24.5552C6.20926 24.5552 7.08974 27.3001 11.2626 26.3701C11.2701 27.6556 11.2836 28.8672 11.2836 29.2332C11.2836 29.6397 11.0076 30.1154 10.2591 29.9729C4.29832 27.9404 0.000976562 22.1744 0.000976562 15.3794C0.000976562 6.88489 6.71775 0 15.0005 0Z"
											fill="white"
										/>
									</g>
									<defs>
										<clipPath id="clip0_1402_55">
											<path
												d="M0.000976562 14.9995C0.000976562 6.7155 6.71647 0 15.0005 0V0C23.2844 0 29.9999 6.7155 29.9999 14.9995V18.75C29.9999 24.9632 24.9631 30 18.7499 30H11.251C5.03778 30 0.000976562 24.9632 0.000976562 18.75V14.9995Z"
												fill="white"
											/>
										</clipPath>
									</defs>
								</svg>
							</figure>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
