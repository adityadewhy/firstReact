import React from "react";

import ReactIcon from "./assets/React-icon.png";

export default function Header() {
	return (
		<header>
			<nav className="nav">
				<div className="logo">
					<img src={ReactIcon} alt="logo" className="nav-logo" />
					<p>ReactFacts</p>
				</div>

				<div className="projectName">
					<p>React Course - Project</p>
				</div>
			</nav>
		</header>
	);
}
