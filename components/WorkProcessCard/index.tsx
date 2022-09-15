import { NextPage } from "next";
import React from "react";
import styles from "../../styles/WorkProcessCard.module.css";

interface WorkProcessCardProps {
	title: string;
	icon: string;
	subtitle: string;
	delay: string;
}

export const WorkProcessCard: React.FC<WorkProcessCardProps> = ({ title, icon, subtitle, delay }) => {
	return (
		<div
			className={styles.workProcessCardContainer}
			data-aos="fade-up"
			data-aos-delay={delay}
			data-aos-offset="200"
		>
			<div className={styles.workProcessCardContents}>
				<img
					src={`../icons/work-process-icons/${icon}.svg`}
					className={styles.workProcessCardIcon}
					alt=""
				/>
				<p className={styles.workProcessCardTitle}>{title}</p>
				<p className={styles.workProcessCardSubtitle}>{subtitle}</p>
			</div>
		</div>
	);
};
