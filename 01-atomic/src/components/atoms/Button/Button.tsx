import React from "react";
import type { CSSProperties, PropsWithChildren } from "react";
import styles from "./Button.module.scss";

/*
	1. Component
	2. ComponentProps : variant, size, fn
*/

type ButtonProps = PropsWithChildren<{
	variant?: "primary" | "secondary" | "danger" | "outline";
	size?: "sm" | "md" | "lg";
	onClick?: () => void;
	style?: CSSProperties;
}>;

export const Button: React.FC<ButtonProps> = ({
	children,
	variant = "primary",
	size = "md",
	onClick,
	style = {},
}) => {
	const className = [
		styles.button,
		styles[`button--${variant}`],
		styles[`button--${size}`],
	]
		.filter(Boolean)
		.join(" ");

	return (
		<button onClick={onClick} className={className} style={style}>
			{children}
		</button>
	);
};
