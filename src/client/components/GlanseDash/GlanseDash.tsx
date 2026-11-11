import React, { use } from "react";
import Card from "../Card/Card";
import styles from "./GlanseDash.module.css";
import { Glasses } from "lucide-react";
import NumberBadge from "../NumberBadge/NumberBadge";

function GlanseDash() {
	const checkinsToday: number = use(
		new Promise((res) => setTimeout(() => res(2), 1000)),
	);

	return (
		<>
			<div className={styles.glanseDashWrapper}>
				<h2 className={styles.cardHeading}>At a glanse</h2>
				<div className={styles.cardRow}>
					<p>
						Check ins <strong>today</strong>
					</p>
					<NumberBadge
						badgeNumber={checkinsToday}
						greenThreshold={3}
					/>
				</div>

				<div className={styles.cardRow}>
					<p>Average Mood ✨:</p>

					<NumberBadge
						badgeNumber={5}
						greenThreshold={3}
					/>
				</div>

				<div className={styles.cardRow}>
					<p>Team members not yet checked in:</p>

					<NumberBadge
						badgeNumber={1}
						greenThreshold={3}
						reversedThreshold
					/>
				</div>

			</div>
		</>
	);
}

export default GlanseDash;
