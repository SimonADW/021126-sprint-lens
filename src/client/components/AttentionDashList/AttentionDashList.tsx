import { getRandomlyDelayedPromise } from "@/shared/lib/helpers";
import React, { use } from "react";
import styles from "./AttentionDashList.module.css";
import { FaceSlightlyFrowning } from "lucide-react";
import NumberBadge from "../NumberBadge/NumberBadge";

function AttentionDashList() {
	const blockers = use(
		getRandomlyDelayedPromise([
			"Need more tokenz for my robot",
			"Tokenz for my robot, plz",
			"Need tokens",
			"Too Hungry to code",
		]),
	);
	const moods = use(
		getRandomlyDelayedPromise([
			{ user: "Simon", currentMood: 5 },
			{ user: "Britta", currentMood: 4 },
		]),
	);
	return (
		<>
			<div className={styles.blockerSection}>
				<h3>Blockers</h3>
				<ul>
					{blockers.map((blocker) => (
						<li key={blocker}>
							<FaceSlightlyFrowning size={15} color="var(--color-warning)" />
							<span>{blocker}</span>
						</li>
					))}
				</ul>
			</div>

			<div className={styles.moodSection}>
				<h3>Moods</h3>
				<ul>
					{moods.map((mood) => (
						<li
							className={styles.moodListItem}
							key={`${mood.user}-${mood.currentMood}`}
						>
							<span>{mood.user}</span>
							<span><NumberBadge greenThreshold={3} badgeNumber={mood.currentMood} /></span>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default AttentionDashList;
