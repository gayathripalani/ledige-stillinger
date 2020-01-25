import React from "react";
import { useLocation } from "react-router";

const ErrorScreen: React.FC = () => {
	const { state } = useLocation();
	//console.log(typeof state.toString());

	return (
		<div>
			<h1>Some Error occured</h1>
		</div>
	);
};

export default ErrorScreen;
