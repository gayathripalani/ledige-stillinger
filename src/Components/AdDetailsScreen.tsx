import React, { useState } from "react";
import { useLocation, useHistory } from "react-router";
import "bootstrap/dist/css/bootstrap.css";
import "./Design.css";
import {Ad, AdProps} from "./Types";

const AdDetailsScreen: React.FC = () => {
	const { state } = useLocation<AdProps>();
	const history = useHistory();
	const [ad] = useState<Ad>(state.ad);
	const [saved, setSaved] = useState(localStorage.getItem("savedAd"));

	const backHandler = () => {
		history.goBack();
	};

	const saveHandler = () => {
		let savedAd = localStorage.getItem("savedAd");
		if (typeof savedAd === "string" && savedAd.indexOf(ad.uuid) === -1) {
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
			if (saved.indexOf(ad.uuid) === -1) return false;
			else return true;
		}
		return false;
	};

	const getButtonText = () => {
		if (typeof saved === "string") {
			if (saved.indexOf(ad.uuid) === -1) return "Save";
			else return "Saved";
		}
		return "Save";
	};

	return (
		<div data-testid="detailPage">
			<button className="btn btn-dark" onClick={backHandler}>
				Back
			</button>
			<button
				className="btn btn-success"
				style={{ marginLeft: "88%" }}
				onClick={saveHandler}
				disabled={getButtonState()}
			>
				{getButtonText()}
			</button>
			<br />
			<br />
			<label>Job Description: </label>
			<div dangerouslySetInnerHTML={{ __html: ad.description }} />
			<label>Employer: </label>
			{ad.employer.name}
			<br />
			{ad.employer.orgnr && (
				<>
					<label>Organization: </label>
					{ad.employer.orgnr}
				</>
			)}
			<br />
			{ad.employer.description && (
				<>
					<label>Description: </label>
					<div dangerouslySetInnerHTML={{ __html: ad.employer.description }} />
				</>
			)}
			{ad.employer.homepage && (
				<>
					<label>Website Homepage Link: </label>
					<a href={ad.employer.homepage}>{ad.employer.homepage}</a>
				</>
			)}
			{ad.occupationCategories.length > 0 && (
				<>
					<label>Occupation Levels: </label>
					{ad.occupationCategories[0].level1} ,{" "}
					{ad.occupationCategories[0].level2}
				</>
			)}
			<br />
			{ad.applicationDue && (
				<>
					<label>Application Due Date: </label>
					{ad.applicationDue}
				</>
			)}
			<br />
		</div>
	);
};

export default AdDetailsScreen;
