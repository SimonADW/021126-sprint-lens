import AttentionDash from "@/client/components/AttentionDash/AttentionDash";
import Card from "@/client/components/Card/Card";
import CardSkeleton from "@/client/components/Card/CardSkeleton";
import GlanseDash from "@/client/components/GlanseDash/GlanseDash";
import TeamUpdateDash from "@/client/components/TeamUpdateDash/TeamUpdateDash";
import { auth0 } from "@/shared/lib/auth0";
import { Glasses, TriangleAlertIcon, UserGroup } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import lensImage from "../../../public/paul-skorupskas-lens.jpg";
import styles from "./page.module.css";

async function DashboardPage() {
	const session = await auth0.getSession();
	if (!session) redirect("/auth/login");

	const nameFromEmail = (session.user.email).split("@").slice(0, 1)
	return (
		<>
			<section className={styles.dashboard}>
				<div className={styles.dashboardHeader}>
					<div className={styles.imageWrapper}>
						<Image
							src={lensImage}
							alt="Holding a camera lens"
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</div>
					<div>
						<h1>
							Welcome{" "}
							{session.user.given_name || nameFromEmail}
						</h1>
						<p>Here&apos;s todays Lens 🔍</p>
					</div>
				</div>

				<div className={styles.dashboardContent}>
					{/* Extract to components */}
					<Suspense fallback={<CardSkeleton featured/>}>
						<Card featured icon={<Glasses color="var(--color-success)" />}>
							<GlanseDash />
						</Card>
					</Suspense>

					<Suspense fallback={<CardSkeleton />}>
						<Card
							icon={
								<TriangleAlertIcon color="var(--color-warning)" />
							}
						>
							<AttentionDash />
						</Card>
					</Suspense>

					<Suspense fallback={<CardSkeleton />}>
						<Card icon={<UserGroup color="var(--color-info)" />}>
							<TeamUpdateDash />
						</Card>
					</Suspense>
				</div>
			</section>
		</>
	);
}

export default DashboardPage;
