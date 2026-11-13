import React, { Suspense, use } from "react";
import Card from "../Card/Card";
import styles from "./AttentionDash.module.css";
import { Glasses } from "lucide-react";
import NumberBadge from "../NumberBadge/NumberBadge";
import AttentionDashList from "../AttentionDashList/AttentionDashList";
import ListItemSkeleton from "../Skeletons/ListItemSkeleton";

function AttentionDash() {

	return (
		<>
			<div className={styles.AttentionDashWrapper}>
				<h2 className={styles.cardHeading}>Needs Attention</h2>

				<Suspense
					fallback={
						<>
							<ListItemSkeleton height={7} />
							<ListItemSkeleton height={3} />
						</>
					}
				>
					<AttentionDashList />
				</Suspense>
			</div>
		</>
	);
}

export default AttentionDash;
