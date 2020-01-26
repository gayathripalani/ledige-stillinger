import React from "react";
import { useHistory } from "react-router";
import "bootstrap/dist/css/bootstrap.css";
import {Link} from "react-router-dom";

const Menu: React.FC = () => {
	const history = useHistory();

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
			style={{ backgroundColor: "black" }}
		>
			<div className="container-fluid" data-testid="menu-bar">
				<div className="navbar-header">
					<Link className="navbar-brand" to="/">
						Arbeidsplassen
					</Link>
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
							padding: "10% 3% 10%",
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

export default Menu;