import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdScreen from "./AdScreen/AdScreen";
import "./Home/Home.css";
import { AdProps } from "./types/App";

const SavedScreen: React.FC = () => {

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
			{ads.length === 0 && <h2>No Saved Ads</h2>}
			{ads.map((ad: AdProps["ad"]) => {
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
							<AdScreen ad={ad} />
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
