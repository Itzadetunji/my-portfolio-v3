import { NextPage } from "next";
import React from "react";
import styles from "../../../styles/ServiceCard.module.css";

interface ServiceCardProps {
	title: string;
	icon: string;
	subtitle: string;
	delay: string;
}
const Index: React.FC<ServiceCardProps> = ({
	title,
	icon,
	subtitle,
	delay,
}) => {
	return (
		<div
			className={styles.serviceCardContainer}
			data-aos="fade-up"
			data-aos-delay={delay}
			data-aos-offset="200"
		>
			<div className={styles.serviceCardContents}>
				<img
					src={`../icons/service-icons/${icon}.svg`}
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
