import React from "react";
import { Heading } from "../../atoms/Heading/Heading";
import { Button } from "../../atoms";
import styles from "./Card.module.scss";

type CardProps = {
	heading: string;
	buttonText: string;
};

export const Card: React.FC<CardProps> = ({ heading, buttonText }) => {
	return (
		<div className={styles.card}>
			<Heading>{heading}</Heading>
			<Button>{buttonText}</Button>
		</div>
	);
};
