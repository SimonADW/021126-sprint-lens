import React from "react";
import styles from "./Card.module.css";

type CardProps = {
	icon: React.ReactNode;
	children: React.ReactNode;
	featured?: boolean;
};

function Card({ icon, featured, children }: CardProps) {
	return (
		<article
			className={`${styles.card} ${featured ? styles.featured : ""}`}
		>
			<div className={styles.iconWrapper}>{icon}</div>
			<div className={styles.cardContent}>{children}</div>
		</article>
	);
}

export default Card;
