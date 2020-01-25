import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdScreen from "./adScreen";
import "../Home.css";

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

const SavedScreen: React.FC = () => {

	const [ads, setAds] = useState<Array<AdProps["advertisement"]>>([]);

	useEffect(() => {
		let savedAd = localStorage.getItem("savedAd");
		if (typeof savedAd === "string") {
			setAds(JSON.parse(savedAd));
		}
	}, []);

	const removeHandler = (uuid: string) => {
		let filteredAds = ads.filter(saved => {
			return saved.uuid !== uuid;
		});
		localStorage.setItem("savedAd", JSON.stringify(filteredAds));
		setAds(filteredAds);
	};

	return (
		<>
			{ads.length === 0 && <h2>No Saved Ads</h2>}
			{ads.map((ad: AdProps["advertisement"]) => {
				return (
					<div className="row ad"
						style={{
							border: "2px solid #000",
							borderRadius: "5px",
							padding: "2% 1%",
							margin: "0.5%",
							flex: 1,
						}}
						key={ad.uuid}
					>
					<div className="col-xs-10 col-lg-10 col-sm-10 col-md-10">
						<Link
							style={{ textDecoration: "none" }}
							to={{ pathname: `/ads/${ad.uuid}`, state: { ad: ad } }}
						>
							<AdScreen advertisement={ad} />
						</Link>
						</div>
						<div className="col-xs-1 col-lg-1 col-sm-1 col-md-1">
						<button
							className="btn btn-danger"
							style={{ marginLeft: "85%",marginTop:"50%"}}
							onClick={() => removeHandler(ad.uuid)}
						>
							Remove
						</button>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default SavedScreen;
