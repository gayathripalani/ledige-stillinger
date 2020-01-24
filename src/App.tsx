import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import AdDetailsScreen from "./Components/adDetailsScreen";
import SavedScreen from "./Components/savedScreen";
import Home from "./Home";
import HeaderTab from "./Components/headerTab";
import ErrorScreen from "./Components/errorScreen";

interface AdProps {
	advertisement: {
		uuid: string;
		published: string;
		expires: string;
		updated: string;
		workLocations: WorkLocation[];
		title: string;
		description: string;
		sourceurl: Object;
		source: string;
		applicationDue: string;
		occupationCategories: Object;
		jobtitle: Object | null;
		link: string;
		employer: Employer[];
		engagementtype: string;
		extent: string;
		starttime: string;
		positioncount: string;
		sector: string;
	};
}

interface WorkLocation {
	country: string;
	address: string;
	city: string;
	postalCode: string;
	county: string;
	municipal: string;
}

interface Employer {
	name: string;
	orgnr: string;
	description: string;
	homepage: string | null;
}

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
				</Switch>
			</div>
		</Router>
	);
};

export default App;
