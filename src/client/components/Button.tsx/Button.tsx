import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {	
	variant?: "primary" | "secondary";
	href?: string;
	onClick?: () => void;
	children: React.ReactNode;
};

function Button({	
	variant = "primary",
	href,
	onClick,
	children,
}: ButtonProps) {
	const Tag = href ? "a" : "button";

	return (
		<Tag href={href} className={`${styles[variant]} ${styles.button}`}>
			{children}
		</Tag>
	);
}

export default Button;
