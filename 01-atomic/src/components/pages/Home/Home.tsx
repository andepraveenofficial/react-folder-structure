import React from "react";
import { Footer, Header } from "../../templates";
import styles from "./Home.module.scss";

const Home: React.FC = () => {
	return (
		<div className={styles.home}>
			<Header />
			<div>Body</div>
			<Footer />
		</div>
	);
};

export default Home;
