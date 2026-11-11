"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from './NavBar.module.css'
import Button from "../Button/Button";

function NavBar() {	
	const pathname = usePathname();

	return (
		<div className={styles.linkWrapper}>
			<Link
				className={pathname === "/dashboard" ? styles.active : ""}
				href="/dashboard"
			>
				Dashboard
			</Link>
			<Link
				className={pathname === "/check-in" ? styles.active : ""}
				href="/check-in"
			>
				Check In
			</Link>
			<Button href="/auth/logout">Log Out</Button>
		</div>
	);
}

export default NavBar;
