import React from "react";
import styles from "./Card.module.css";

function CardSkeleton({ featured }: { featured?: boolean }) {
	return (
		<article
			className={`${styles.card} ${styles.cardSkeleton} ${featured ? styles.featured : ""} skeleton`}
		></article>
	);
}

export default CardSkeleton;
