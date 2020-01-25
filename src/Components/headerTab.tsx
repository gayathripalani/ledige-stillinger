import React, { useState } from "react";
import { useHistory } from "react-router";
import "bootstrap/dist/css/bootstrap.css";

const HeaderTab: React.FC = () => {
	const history = useHistory();
	console.log("history");
	console.log(history);

	let homehightlighted =
		history.location.pathname === "/ads" || history.location.pathname === "/"
			? "#A9A9A9"
			: "black";
	let savedhightlighted =
		history.location.pathname === "/saved" ? "#A9A9A9" : "black";
	let homehightlightedBackground =
		history.location.pathname === "/ads" || history.location.pathname === "/"
			? "black"
			: "#A9A9A9";
	let savedhightlightedBackground =
		history.location.pathname === "/saved" ? "black" : "#A9A9A9";

	return (
		<nav
			className="navbar navbar-dark "
			style={{ backgroundColor: "#D3D3D3" }}
		>
			<div className="container-fluid">
				<div className="navbar-header">
					<a className="navbar-brand" href="/">
						Arbeidsplassen
					</a>
				</div>
				<ul className="nav navbar-nav" style={{ display: "inline" }}>
					<li
						style={{
							display: "inline",
							padding: "10%",
							color: homehightlighted,
							backgroundColor: homehightlightedBackground
						}}
					>
						<a onClick={() => history.push("/ads")}>Home</a>
					</li>
					<li
						style={{
							display: "inline",
							padding: "10%",
							color: savedhightlighted,
							backgroundColor: savedhightlightedBackground
						}}
					>
						<a onClick={() => history.push("/saved")}>Saved</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default HeaderTab;
