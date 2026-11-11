import { use } from "react";
import styles from "./TeamUpdateDash.module.css";

function TeamUpdateDash() {
	const checkinsToday: number = use(
		new Promise((res) => setTimeout(() => res(2), 2500)),
	);

	const fetchedUpdates = [
		{
			user: "Simon",
			userAvatarUrl: "https://some.url",
			messageTitle: "Very close to finished",
			message: "Lorem Ipsum doler osv",
		},
		{
			user: "Skybert",
			userAvatarUrl: "https://someother.url",
			messageTitle: "No where near finished",
			message: "Ipsum Lorem doler osv",
		},
		{
			user: "Skybert",
			userAvatarUrl: "https://someother2.url",
			messageTitle: "No where near finished",
			message: "Ipsum Lorem doler osv",
		},
		{
			user: "Skybert",
			userAvatarUrl: "https://someother3.url",
			messageTitle: "No where near finished",
			message: "Ipsum Lorem doler osv",
		},
	];

	return (
		<>
			<div className={styles.TeamUpdateDashWrapper}>
				<h2 className={styles.cardHeading}>Latest Team Updates</h2>
				<ul>
					{fetchedUpdates.map((update)=> {
						return (
							<li className={styles.listItem} key={update.userAvatarUrl}>
								<div className={styles.messageHeader}>
									{/* <Image width={25} height={25}  src={update.userAvatarUrl} alt="User avatar image"/> */}
									<p>{update.user}</p>
								</div>
								<div className={styles.messageContent}>
									<h3>{update.messageTitle}</h3>
									<p>{update.message}</p>
								</div>
							</li>
						)
					} )}
				</ul>
				{/* <Image> */}

			</div>
		</>
	);
}

export default TeamUpdateDash;
