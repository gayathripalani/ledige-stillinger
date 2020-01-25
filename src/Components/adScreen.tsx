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
		occupationCategories: OccupationCategories[];
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

interface OccupationCategories {
	level1: String;
	level2: String;
}

const AdScreen: React.FC<AdProps> = ({ advertisement }) => {
	return (
		<div className="row">
		<div className="col-xs-2 col-lg-2 col-sm-2 col-md-2">
			{(advertisement.published.slice(0,10)).split("-").reverse().join(".")}
    </div>
		<div className="col-xs-3 col-lg-3 col-sm-3 col-md-3">
			{advertisement.jobtitle?advertisement.jobtitle:"-"}
    </div>
		<div className="col-xs-5 col-lg-5 col-sm-5 col-md-5">
			{advertisement.title?advertisement.title:"-"}
     </div>
		</div>
		// {console.log(ads.first)}
	);
};

export default AdScreen;
