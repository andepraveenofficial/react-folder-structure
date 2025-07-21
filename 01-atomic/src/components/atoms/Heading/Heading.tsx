import React from "react";
import type { CSSProperties, PropsWithChildren } from "react";
import styles from "./Heading.module.scss";

/*
    Heading Component : 
    1. variant (h1-h6)
    2. color
    3. custom style support
*/

/* -----> Types <----- */
type HeadingVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingColor = "primary" | "secondary" | "danger" | "inherit";

/* -----> ComponentProps <----- */
type HeadingProps = PropsWithChildren<{
	variant?: HeadingVariant;
	color?: HeadingColor;
	style?: CSSProperties;
}>;

/* -----> Component <----- */
export const Heading: React.FC<HeadingProps> = ({
	children,
	variant = "h2",
	color = "inherit",
	style = {},
}) => {
	const className = [
		styles.heading,
		styles[`heading--${variant}`],
		styles[`heading--${color}`],
	]
		.filter(Boolean)
		.join(" ");

	// Render the appropriate heading element based on variant
	const Component = variant;

	return (
		<Component className={className} style={style}>
			{children}
		</Component>
	);
};
