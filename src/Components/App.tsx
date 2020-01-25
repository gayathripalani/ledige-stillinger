import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Design.css";

import AdDetailsScreen from "./AdDetailsScreen";
import SavedScreen from "./SavedScreen";
import Home from "./Home";
import Menu from "./Menu";
import PageNotFound from "./PageNotFound";

const App: React.FC = () => {
	return (
		<Router>
			<Menu />
			<div className="app_container" data-testid="app_container">
				<Switch>
					<Route exact path="/" component={Home}></Route>
					<Route exact path="/ads" component={Home}></Route>
					<Route exact path="/saved" component={SavedScreen}></Route>
					<Route exact path="/ads/:id" component={AdDetailsScreen}></Route>
					<Route component={PageNotFound}></Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
