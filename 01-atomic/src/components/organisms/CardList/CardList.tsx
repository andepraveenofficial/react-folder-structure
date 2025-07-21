import React from "react";
import { Heading } from "../../atoms/Heading/Heading";
import { Card } from "../../molecules";
import styles from "./CardList.module.scss";

const data = [
	{ heading: "Card 1", buttonText: "Button 1" },
	{ heading: "Card 2", buttonText: "Button 2" },
	{ heading: "Card 3", buttonText: "Button 3" },
	{ heading: "Card 4", buttonText: "Button 4" },
	{ heading: "Card 5", buttonText: "Button 5" },
];
export const CardList: React.FC = () => {
	return (
		<div className={styles.cardlist}>
			<Heading>Card List</Heading>
			{data.map((item, index) => {
				return (
					<Card
						key={index}
						heading={item.heading}
						buttonText={item.buttonText}
					/>
				);
			})}
		</div>
	);
};
