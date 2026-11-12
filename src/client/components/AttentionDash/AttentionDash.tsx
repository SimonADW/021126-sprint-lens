import React, { use } from "react";
import Card from "../Card/Card";
import styles from "./AttentionDash.module.css";
import { Glasses } from "lucide-react";
import NumberBadge from "../NumberBadge/NumberBadge";

function AttentionDash() {
	const checkinsToday: number = use(
		new Promise((res) => setTimeout(() => res(2), 500)),
	);

	return (
		<>
			<div className={styles.AttentionDashWrapper}>
				<h2 className={styles.cardHeading}>Needs Attention</h2>
				<p>Blockers</p>
				<ul></ul>

				<p>Moods</p>
				<ul></ul>
			</div>
		</>
	);
}

export default AttentionDash;
