import { NextPage } from "next";
import React from "react";
import styles from "../../../styles/ServiceCard.module.css";

interface ServiceCardProps {
	title: string;
	icon: string;
	subtitle: string;
}
const Index: React.FC<ServiceCardProps> = ({ title, icon, subtitle }) => {
	return (
		<div className={styles.serviceCardContainer}>
			<div className={styles.serviceCardContents}>
				<img
					src={`../icons/service-icons/${title}.svg`}
					className={styles.serviceCardIcon}
					alt=""
				/>
				<p className={styles.serviceCardTitle}>{title}</p>
				<p className={styles.serviceCardSubtitle}>{subtitle}</p>
			</div>
		</div>
	);
};

export default Index;
