import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import JobVacancyList from "./JobVacancyList";
import getAd from "../common/FetchDetail";
import "bootstrap/dist/css/bootstrap.css";
import "../common/Design.scss";
import { AdProps } from "../common/Types";
import SpinnerIcon from "./SpinnerIcon"

const Home: React.FC = () => {
	const [ads, setAds] = useState<Array<AdProps["ad"]>>([]);
	const [page, setPage] = useState<number>(0);
	const [first, setFirst] = useState<boolean>();
	const [last, setLast] = useState<boolean>();
	const [saved, setSaved] = useState(localStorage.getItem("savedAd"));
	const history = useHistory();

	useEffect(() => {
		getAd(page.toString())
			.then(results => {
				setAds(results.content);
				setFirst(results.first);
				setLast(results.last);
			})
			.catch(err => {
				history.push({ pathname: "/error", state:{error:err.toString()} });
			});
	}, [page,history]);

	const nextHandler = () => {
		setPage(page + 1);
	};

	const prevHandler = () => {
		setPage(page - 1);
	};

	const saveHandler = (ad: AdProps["ad"]) => {
		let savedAd = localStorage.getItem("savedAd");
		if (typeof savedAd === "string" && savedAd.indexOf(ad.uuid) === -1) {
			let savedAdArr: Array<AdProps["ad"]> = JSON.parse(savedAd);
			savedAdArr.push(ad);
			localStorage.setItem("savedAd", JSON.stringify(savedAdArr));
		} else {
			let savedAd = [];
			savedAd.push(ad);
			localStorage.setItem("savedAd", JSON.stringify(savedAd));
		}
		setSaved(localStorage.getItem("savedAd"));
	};

	const getButtonState = (ad: AdProps["ad"]) => {
		if (typeof saved === "string") {
			if (saved.indexOf(ad.uuid) === -1) return false;
			else return true;
		}
		return false;
	};

	const getButtonText = (ad: AdProps["ad"]) => {
		if (typeof saved === "string") {
			if (saved.indexOf(ad.uuid) === -1) return "Save";
			else return "Saved";
		}
		return "Save";
	};

	return (
		<div>
			<div style={{alignItems:"center"}}> {ads.length === 0 && <SpinnerIcon />}</div>
			{ads.map((ad: AdProps["ad"]) => {
				return (
					<div className="row ad"
						style={{
							border: "2px solid #000",
							borderRadius: "5px",
							padding: "2% 1%",
							margin: "0.5%",
							flex: 1
						}}
						key={ad.uuid}
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
						className="btn btn-success save"
						onClick={() => saveHandler(ad)}
						disabled={getButtonState(ad)}
					>
						{getButtonText(ad)}
					</button>
					</div>
       </div>

				);
			})}
			<br />
			{ ads.length!=0 && <button className="btn btn-primary" onClick={prevHandler} disabled={first}>Prev</button> }
			{ ads.length!=0 && <button className="btn btn-primary next" onClick={nextHandler} disabled={last}>Next</button> }
		</div>
	);
};

export default Home;
