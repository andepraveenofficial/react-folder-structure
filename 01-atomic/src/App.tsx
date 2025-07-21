import React from "react";
import { Button } from "./components/atoms";
import { Heading } from "./components/atoms/Heading/Heading";
import { Card } from "./components/molecules";
import { CardList } from "./components/organisms";
import { Footer } from "./components/templates";
import Home from "./components/pages/Home/Home";

const App: React.FC = () => {
	return (
		<div>
			<div>
				<h1>1. atoms</h1>
				<Button>Button</Button>
				<Heading>Heading</Heading>
			</div>
			<hr />

			<div>
				<h1>2. molecules</h1>
				<Card heading='Heading' buttonText='Button' />
			</div>
			<hr />

			<div>
				<h1>3. organisms</h1>
				<CardList />
			</div>

			<div>
				<h1>4. templates</h1>
				<Footer />
			</div>

			<div>
				<h1>5. pages</h1>
				<Home />
			</div>
		</div>
	);
};

export default App;
