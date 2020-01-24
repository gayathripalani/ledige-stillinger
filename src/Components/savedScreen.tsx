import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import AdScreen from "./adScreen";

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

const SavedScreen: React.FC = () => {
	const history = useHistory();

	const [ads, setAds] = useState<Array<AdProps["advertisement"]>>([]);

	useEffect(() => {
		let savedAd = localStorage.getItem("savedAd");
		if (typeof savedAd === "string") {
			setAds(JSON.parse(savedAd));
		}
	}, []);

	const openHandler = (advertisement: AdProps["advertisement"]) => {
		history.push({
			pathname: `ads/${advertisement.uuid}`,
			state: { ad: advertisement }
		});
	};

	return (
		<>
			{ads.length === 0 && <h2>No Saved Ads</h2>}
			{ads.map((ad: AdProps["advertisement"]) => {
				console.log(ad);
				return (
					<div
						style={{
							border: "2px solid #000",
							borderRadius: "5px",
							padding: "2% 1%",
							margin: "0.5%",
							flex: 1
						}}
					>
						<Link
							style={{ textDecoration: "none" }}
							to={{ pathname: `/ads/${ad.uuid}`, state: { ad: ad } }}
						>
							<AdScreen key={ad.uuid} advertisement={ad} />
						</Link>
						<button className="btn btn-primary" onClick={() => openHandler(ad)}>
							Open
						</button>
					</div>
				);
			})}
		</>
	);
};

export default SavedScreen;
