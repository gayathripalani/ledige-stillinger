import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../common/Design.scss";

import JobVacancyDetails from "./JobVacancyDetails";
import SavedJobs from "./SavedJobs";
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
					<Route exact path="/saved" component={SavedJobs}></Route>
					<Route exact path="/ads/:id" component={JobVacancyDetails}></Route>
					<Route component={PageNotFound}></Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
