import React from "react";
import "./style/app.css";
import Main from "../Main";
import About from "../About";
import Navbar from "../Navbar";

function App() {
	return (
		<>
			<Navbar />
			<Main />
			<About />
		</>
	);
}

export default App;
