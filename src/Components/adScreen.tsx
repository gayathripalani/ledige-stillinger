import React from "react";
import "./adScreen.css";

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

const AdScreen: React.FC<AdProps> = ({ advertisement }) => {
	console.log(advertisement);

	console.log("in adscreen");

	return (
		<div>
			<h3>Date: </h3>
			<p>{advertisement.published}</p>
			{advertisement.jobtitle != null && (
				<>
					<h3>Job Title: </h3>
					<p>{advertisement.jobtitle}</p>
				</>
			)}
			<h3>ad Title: </h3>
			<p>{advertisement.title}</p>
			{/* <button onClick={openHandler}>Open</button>
			<button>Save</button> */}
		</div>
		// {console.log(ads.first)}
	);
};

export default AdScreen;
