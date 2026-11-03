import Link from "next/link";
import styles from "./Header.module.css";
import NavBar from "../navbar/NavBar";
import { auth0 } from "@/shared/lib/auth0";
import NavBarSkeleton from "../navbar/NavBarSkeleton";
import { Suspense } from "react";
import Button from "../Button.tsx/Button";

async function Header() {
	// Check if user is authenticated
	const session = await auth0.getSession();

	return (
		<header className={styles.header}>
			<Link href="/">
				<div className={styles.headerBrand}>
					Sprint Lens{" "}
					<div className={styles.headerSuffix}>by SAW</div>
				</div>
			</Link>

			{session ? (
				<Suspense fallback={<NavBarSkeleton />}>
					<NavBar />															
				</Suspense>
			) : (
				<>
				<Button tag="a" href="auth/login">Log In</Button>
				</>
			)}
		</header>
	);
}

export default Header;
