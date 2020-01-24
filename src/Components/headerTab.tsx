import React, { useState } from "react";
import { useHistory } from "react-router";
import "bootstrap/dist/css/bootstrap.css";

const HeaderTab: React.FC = () => {
	const history = useHistory();
	console.log("history");
	console.log(history);

	let homehightlighted =
		history.location.pathname === "/ads" || history.location.pathname === "/"
			? "black"
			: "white";
	let savedhightlighted =
		history.location.pathname === "/saved" ? "black" : "white";

	return (
		<nav
			className="navbar navbar-dark bg-primary"
			style={{ backgroundColor: "#e3f2fd" }}
		>
			<div className="container-fluid">
				<div className="navbar-header">
					<a className="navbar-brand" href="#">
						Arbeidsplassen
					</a>
				</div>
				<ul className="nav navbar-nav" style={{ display: "inline" }}>
					<li
						style={{
							display: "inline",
							padding: "10%",
							color: homehightlighted
						}}
					>
						<a onClick={() => history.push("/ads")}>Home</a>
					</li>
					<li
						style={{
							display: "inline",
							padding: "10%",
							color: savedhightlighted
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
