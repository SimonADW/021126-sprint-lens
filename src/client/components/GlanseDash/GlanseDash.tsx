import { Suspense } from "react";
import GlanseDashList from "../GlanseDashList/GlanseDashList";
import styles from "./GlanseDash.module.css";
import ListItemSkeleton from "../Skeletons/ListItemSkeleton";

function GlanseDash() {
	return (
		<>
			<div className={styles.glanseDashWrapper}>
				<h2 className={styles.cardHeading}>At a glanse</h2>

				<Suspense
					fallback={
						<>
							<ListItemSkeleton height={1.5} />
							<ListItemSkeleton height={1.5} />
							<ListItemSkeleton height={1.5} />
						</>
					}
				>
					<GlanseDashList />
				</Suspense>
			</div>
		</>
	);
}

export default GlanseDash;
