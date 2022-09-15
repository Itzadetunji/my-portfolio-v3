import { NextPage } from "next";
import React from "react";
import styles from "../../styles/TechStack.module.css";

const TechStack: NextPage = () => {
	const TechStackContents1 = [
		{
			path: "../icons/stack-icons/html.svg",
			name: "HTML",
		},
		{
			path: "../icons/stack-icons/css.svg",
			name: "CSS",
		},
		{
			path: "../icons/stack-icons/javascript.svg",
			name: "Javascript",
		},
		{
			path: "../icons/stack-icons/react.svg",
			name: "Reactjs",
		},
		{
			path: "../icons/stack-icons/next.svg",
			name: "Nextjs",
		},
		{
			path: "../icons/stack-icons/vue.svg",
			name: "Vuejs",
		},
		{
			path: "../icons/stack-icons/npm.svg",
			name: "NPM",
		},
		{
			path: "../icons/stack-icons/yarn.svg",
			name: "Yarn",
		},
		{
			path: "../icons/stack-icons/node.svg",
			name: "Nodejs",
		},
		{
			path: "../icons/stack-icons/html.svg",
			name: "HTML",
		},
		{
			path: "../icons/stack-icons/css.svg",
			name: "CSS",
		},
		{
			path: "../icons/stack-icons/Javascript.svg",
			name: "Javascript",
		},
		{
			path: "../icons/stack-icons/react.svg",
			name: "Reactjs",
		},
		{
			path: "../icons/stack-icons/next.svg",
			name: "Nextjs",
		},
		{
			path: "../icons/stack-icons/vue.svg",
			name: "Vuejs",
		},
		{
			path: "../icons/stack-icons/npm.svg",
			name: "NPM",
		},
		{
			path: "../icons/stack-icons/yarn.svg",
			name: "Yarn",
		},
		{
			path: "../icons/stack-icons/node.svg",
			name: "Node js",
		},
	];
	const TechStackContents2 = [
		{
			path: "../icons/stack-icons/typescript.svg",
			name: "Typescript",
		},
		{
			path: "../icons/stack-icons/mysql.svg",
			name: "Mysql",
		},
		{
			path: "../icons/stack-icons/mongodb.svg",
			name: "Mongodb",
		},
		{
			path: "../icons/stack-icons/webpack.svg",
			name: "Webpack",
		},
		{
			path: "../icons/stack-icons/tailwindcss.svg",
			name: "Tailwindcss",
		},
		{
			path: "../icons/stack-icons/bootstrap.svg",
			name: "Bootstrap",
		},
		{
			path: "../icons/stack-icons/github.svg",
			name: "Github",
		},
		{
			path: "../icons/stack-icons/vscode.svg",
			name: "VSCode",
		},
		{
			path: "../icons/stack-icons/postman.svg",
			name: "Postman",
		},
		{
			path: "../icons/stack-icons/typescript.svg",
			name: "Typescript",
		},
		{
			path: "../icons/stack-icons/mysql.svg",
			name: "Mysql",
		},
		{
			path: "../icons/stack-icons/mongodb.svg",
			name: "Mongodb",
		},
		{
			path: "../icons/stack-icons/webpack.svg",
			name: "Webpack",
		},
		{
			path: "../icons/stack-icons/tailwindcss.svg",
			name: "Tailwindcss",
		},
		{
			path: "../icons/stack-icons/bootstrap.svg",
			name: "Bootstrap",
		},
		{
			path: "../icons/stack-icons/github.svg",
			name: "Github",
		},
		{
			path: "../icons/stack-icons/vscode.svg",
			name: "VSCode",
		},
		{
			path: "../icons/stack-icons/postman.svg",
			name: "Postman",
		},
	];
	return (
		<>
			<div className={styles.techStackComponentContainer}>
				<div className={`${styles.techStackComponent} ${styles.techStackAnimate} `}>
					{TechStackContents1.map((stack, index) => (
						<img
							src={stack.path}
							alt={stack.name}
							key={index}
						/>
					))}
				</div>
				<div className={`${styles.techStackComponent} ${styles.techStackAnimateReversed} `}>
					{TechStackContents2.map((stack2, index) => (
						<img
							src={stack2.path}
							alt={stack2.name}
							key={index}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default TechStack;
