import React, { useState } from "react";
import { useParams, useLocation, useHistory } from "react-router";
import "bootstrap/dist/css/bootstrap.css";

interface AdProps {
	ad: {
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
		employer: Employer;
		engagementtype: string;
		extent: string;
		starttime: string;
		positioncount: string;
		sector: string;
	};
}

interface Ad {
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
	employer: Employer;
	engagementtype: string;
	extent: string;
	starttime: string;
	positioncount: string;
	sector: string;
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

const AdDetailsScreen: React.FC = () => {
	const { id } = useParams();
	const { state } = useLocation<AdProps>();
	const history = useHistory();
	const [ad, setAd] = useState<Ad>(state.ad);
	const [saved, setSaved] = useState(localStorage.getItem("savedAd"));

	const backHandler = () => {
		history.goBack();
	};

	const saveHandler = () => {
		let savedAd = localStorage.getItem("savedAd");
		if (typeof savedAd === "string" && savedAd.indexOf(ad.uuid) == -1) {
			let savedAdArr: Array<Ad> = JSON.parse(savedAd);
			savedAdArr.push(ad);
			localStorage.setItem("savedAd", JSON.stringify(savedAdArr));
		} else {
			let savedAd = [];
			savedAd.push(ad);
			localStorage.setItem("savedAd", JSON.stringify(savedAd));
		}
		setSaved(localStorage.getItem("savedAd"));
	};

	const getButtonState = () => {
		if (typeof saved === "string") {
			if (saved.indexOf(ad.uuid) == -1) return false;
			else return true;
		}
		return false;
	};

	return (
		<div>
			<button className="btn btn-dark" onClick={backHandler}>
				Back
			</button>
			<button
				className="btn btn-success"
				onClick={saveHandler}
				disabled={getButtonState()}
			>
				Save
			</button>
			<br />
			<label>Job Description: </label>
			<div dangerouslySetInnerHTML={{ __html: ad.description }} />
			<label>Employer: </label>
			{ad.employer.name}
			<label>Organization: </label>
			{ad.employer.orgnr}
			<label>Description: </label>
			<div dangerouslySetInnerHTML={{ __html: ad.employer.description }} />
			{ad.employer.homepage && (
				<>
					<label>Website Homepage Link: </label>
					<a href={ad.employer.homepage}>{ad.employer.homepage}</a>
				</>
			)}
		</div>
	);
};

export default AdDetailsScreen;
