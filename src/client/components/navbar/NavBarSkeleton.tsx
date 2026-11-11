import styles from "./NavBar.module.css";

function NavBarSkeleton() {

	return (
		<header className={styles.header}>
			<div>
			
			</div>

			<div className={styles.linkWrapper}>
				<div className={`${styles.linkSkeleton} skeleton`}></div>
				<div className={`${styles.linkSkeleton} skeleton`}></div>
			</div>
		</header>
	);
}

export default NavBarSkeleton;
