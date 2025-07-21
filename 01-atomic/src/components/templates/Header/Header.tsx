import React from "react";
import { Heading } from "../../atoms/Heading/Heading";
import { CardList } from "../../organisms";

export const Header: React.FC = () => {
	return (
		<div>
			<Heading>Header</Heading>
			<CardList />
		</div>
	);
};
