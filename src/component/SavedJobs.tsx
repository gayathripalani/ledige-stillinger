import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import JobVacancyList from "./JobVacancyList";
import "../common/Design.scss";
import { AdProps } from "../common/Types";

const SavedJobs: React.FC = () => {

	const [ads, setAds] = useState<Array<AdProps["ad"]>>([]);

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
		  {ads.length !== 0 && <h3 style={{textAlign:"center"}}>Saved Ads</h3>}
			{ads.length === 0 && <h2>No Saved Ads</h2>}
			{ads.map((ad: AdProps["ad"]) => {
				return (
					<div className="row ad vacancy-list"
						key={ad.uuid}
						 data-testid={`savedjob_${ad.uuid}`}
					>
					<div className="col-xs-10 col-lg-10 col-sm-10 col-md-10">
						<Link
							style={{ textDecoration: "none" }}
							to={{ pathname: `/ads/${ad.uuid}`, state: { ad: ad } }}
						>
							<JobVacancyList ad={ad} />
						</Link>
						</div>
						<div className="col-xs-1 col-lg-1 col-sm-1 col-md-1">
						<button
							className="btn btn-danger remove"
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

export default SavedJobs;
