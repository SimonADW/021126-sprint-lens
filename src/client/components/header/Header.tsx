"use client"

import Link from "next/link";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";

function Header() {
	const pathname = usePathname();

	return (
		<header className={styles.header}>
			<Link href="/">
				<div>
					Sprint Lens{" "}
					<div className={styles.headerSuffix}>by SAW</div>
				</div>
			</Link>

			<div className={styles.linkWrapper}>
				<Link className={pathname === "/dashboard" ? styles.active : ""} href="/dashboard">Dashboard</Link>
				<Link className={pathname === "/check-in" ? styles.active : ""} href="/check-in">Check In</Link>
			</div>
		</header>
	);
}

export default Header;
