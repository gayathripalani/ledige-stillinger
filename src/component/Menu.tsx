import React from "react";
import { useHistory } from "react-router";
import "bootstrap/dist/css/bootstrap.css";
import {Link} from "react-router-dom";

const Menu: React.FC = () => {
	const history = useHistory();
	let disabled =
		history.location.pathname === "/saved" ? true : false;

	return (
		<nav
			className="navbar navbar-dark "
			style={{ backgroundColor: "black" }}
		>
			<div className="container-fluid" data-testid="menu-bar">
				<div className="navbar-header">
					<Link className="navbar-brand" to="/">
						Ledige Stillinger
					</Link>
				</div>
        <button className="btn btn-primary" disabled={disabled} onClick={() => history.push("/saved")}>View Saved Ads</button>
			</div>
		</nav>
	);
};

export default Menu;
