import React from "react";
import styles from "./NumberBadge.module.css";

type NumberBadgeProps = {
	badgeNumber: number; 
	greenThreshold: number; // Number from which to display green badge 
	reversedThreshold?: boolean;
};

function NumberBadge({ badgeNumber, greenThreshold, reversedThreshold }: NumberBadgeProps) {
	let backgroundColor: "var(--color-success)" | "var(--color-error)";
	backgroundColor = (badgeNumber >= greenThreshold) ? "var(--color-success)" : "var(--color-error)";
	if(reversedThreshold) backgroundColor = (badgeNumber <= greenThreshold) ? "var(--color-success)" : "var(--color-error)";
	
	return (
		<div
			className={styles.badge}
			style={{
				background: backgroundColor,
			}}
		>
			<p>{badgeNumber}</p>
		</div>
	);
}

export default NumberBadge;
