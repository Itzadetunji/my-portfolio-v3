import { NextPage } from "next";
import React from "react";
import styles from "../../styles/Footer.module.css";

export const Footer: NextPage = () => {
	return (
		<div className={styles.footerContainer}>
			<div className={styles.footerContents}>
				<p>
					{" "}
					Copyright <span className={styles.footerSpan}>©</span> 2022{" "}
					<span
						className={styles.footerSpan}
						style={{ backgroundColor: "transparent" }}
					>
						|
					</span>{" "}
					Adetunji Adeyinka{" "}
				</p>
			</div>
		</div>
	);
};
