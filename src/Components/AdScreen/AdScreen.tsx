import React from "react";
import "./AdScreen.css";
import { AdProps } from "../types/App";

const AdScreen: React.FC<AdProps> = ({ ad }) => {
	return (
		<div className="row">
		<div className="col-xs-2 col-lg-2 col-sm-2 col-md-2">
			{(ad.published.slice(0,10)).split("-").reverse().join(".")}
    </div>
		<div className="col-xs-3 col-lg-3 col-sm-3 col-md-3">
			{ad.jobtitle?ad.jobtitle:"-"}
    </div>
		<div className="col-xs-5 col-lg-5 col-sm-5 col-md-5">
			{ad.title?ad.title:"-"}
     </div>
		</div>
	);
};

export default AdScreen;
