import { auth0 } from "@/shared/lib/auth0";
import { redirect } from "next/navigation";
import styles from "./page.module.css";
import Image from "next/image";
import Card from "@/client/components/Card/Card";
import CardSkeleton from "@/client/components/Card/CardSkeleton";
import GlanseDash from "@/client/components/GlanseDash/GlanseDash";
import { Suspense } from "react";
import { Glasses, TriangleAlert, TriangleAlertIcon, UserGroup } from "lucide-react";
import AttentionDash from "@/client/components/AttentionDash/AttentionDash";
import TeamUpdateDash from "@/client/components/TeamUpdateDash/TeamUpdateDash";

async function DashboardPage() {
	const session = await auth0.getSession();
	if (!session) redirect("/auth/login");

	return (
		<>
			<section className={styles.dashboard}>
				<div className={styles.dashboardHeader}>
					<div className={styles.imageWrapper}>
						<Image
							src={"/paul-skorupskas-lens.jpg"}
							alt="Holding a camera lens"
							fill
						/>
					</div>
					<div>
						<h1>
							Welcome{" "}
							{session.user.given_name || session.user.name}
						</h1>
						<p>Here&apos;s todays Lens 🔍</p>
					</div>
				</div>

				<div className={styles.dashboardContent}>
					{/* Extract to components */}
					<Suspense fallback={<CardSkeleton />}>
						<Card icon={<Glasses color="var(--color-success)" />}>
							<GlanseDash />
						</Card>
					</Suspense>

					<Suspense fallback={<CardSkeleton />}>
						<Card icon={<TriangleAlertIcon color="var(--color-warning)" />}>
							<AttentionDash  />
						</Card>
					</Suspense>

					<Suspense fallback={<CardSkeleton />}>
						<Card icon={<UserGroup color="var(--color-info)" />}>
							<TeamUpdateDash  />
						</Card>
					</Suspense>
				</div>
			</section>
		</>
	);
}

export default DashboardPage;
