import { auth0 } from "@/shared/lib/auth0";
import { redirect } from "next/navigation";
import styles from "./page.module.css";

async function DashboardPage() {
	const session = await auth0.getSession();
	if (!session) redirect("/auth/login");

	return (
		<>
			<section className={styles.dashboard}>
				<div className={styles.dashboardHeader}>
					<h1>Dashboard</h1>
					<p>User: {session.user.given_name || session.user.name}</p>
				</div>

				<div className={styles.dashboardContent}>
					{/* Extract to components */}
					<article className={styles.firstChild}>
						<h2>At a glance</h2>
						<p>Check Ins today: 5</p>
						<p>Average Mood: 5</p>
						<p>Not yet checked in: 2</p>
					</article>

					<article>
						<h2>Needs attention</h2>
						<p>Blockers</p>
						<ul></ul>

						<p>Moods</p>
						<ul></ul>
					</article>

					<article>
						<h2>Latest Team Updates</h2>
						<ul></ul>
					</article>
				</div>
			</section>
		</>
	);
}

export default DashboardPage;
