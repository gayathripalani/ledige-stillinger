import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import AdDetailsScreen from "../AdDetailsScreen/AdDetailsScreen";
import SavedScreen from "../SavedScreen";
import Home from "../Home/Home";
import HeaderTab from "../HeaderTab";
import ErrorScreen from "../ErrorScreen";
import PageNotFound from "../PageNotFound";

const App: React.FC = () => {
	return (
		<Router>
			<HeaderTab />
			<div className="container">
				{/* <AdScreen advertisement={ads[0]} /> */}

				<Switch>
					<Route exact path="/" component={Home}></Route>
					<Route exact path="/ads" component={Home}></Route>
					<Route exact path="/saved" component={SavedScreen}></Route>
					<Route exact path="/error" component={ErrorScreen}></Route>
					<Route exact path="/ads/:id" component={AdDetailsScreen}></Route>
					<Route exact path="*" component={PageNotFound}></Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
