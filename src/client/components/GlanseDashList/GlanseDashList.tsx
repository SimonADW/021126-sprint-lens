import React, { use } from "react";
import NumberBadge from "../NumberBadge/NumberBadge";
import styles from "./GlanseDashList.module.css";
import { getRandomlyDelayedPromise } from "@/shared/lib/helpers";

function GlanseDashList() {
	const checkinsToday: number = use(getRandomlyDelayedPromise(20));
	const averageMood: number = use(getRandomlyDelayedPromise(5));
	const teamMembersNotCheckedIn: number = use(getRandomlyDelayedPromise(10));

	return (
		<ul className={styles.glanseList}>
			<li className={styles.cardRow}>
				<p>
					Check ins <strong>today</strong>
				</p>
				<NumberBadge badgeNumber={checkinsToday} greenThreshold={3} />
			</li>

			<li className={styles.cardRow}>
				<p>Average Mood ✨:</p>

				<NumberBadge badgeNumber={averageMood} greenThreshold={3} />
			</li>

			<li className={styles.cardRow}>
				<p>Team members not yet checked in:</p>

				<NumberBadge
					badgeNumber={teamMembersNotCheckedIn}
					greenThreshold={3}
					reversedThreshold
				/>
			</li>
		</ul>
	);
}

export default GlanseDashList;
