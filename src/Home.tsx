import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import AdScreen from "./Components/adScreen";
import getAd from "./controller/adController";
import "bootstrap/dist/css/bootstrap.css";

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

const Home: React.FC = () => {
	const [ads, setAds] = useState<Array<AdProps["advertisement"]>>([]);
	const [page, setPage] = useState<number>(0);
	const [first, setFirst] = useState<boolean>();
	const [last, setLast] = useState<boolean>();
	const [saved, setSaved] = useState(localStorage.getItem("savedAd"));
	const history = useHistory();

	useEffect(() => {
		console.log("executing getAds");
		getAd(page.toString())
			.then(results => {
				setAds(results.content);
				setFirst(results.first);
				setLast(results.last);
			})
			.catch(err => {
				console.log(err);
				history.replace({ pathname: "/error", state: err });
			});
	}, [page]);

	const nextHandler = () => {
		setPage(page + 1);
	};

	const prevHandler = () => {
		setPage(page - 1);
	};

	const openHandler = (advertisement: AdProps["advertisement"]) => {
		history.push({
			pathname: `ads/${advertisement.uuid}`,
			state: { ad: advertisement }
		});
	};

	const saveHandler = (ad: AdProps["advertisement"]) => {
		let savedAd = localStorage.getItem("savedAd");
		if (typeof savedAd === "string" && savedAd.indexOf(ad.uuid) == -1) {
			let savedAdArr: Array<AdProps["advertisement"]> = JSON.parse(savedAd);
			savedAdArr.push(ad);
			localStorage.setItem("savedAd", JSON.stringify(savedAdArr));
		} else {
			let savedAd = [];
			savedAd.push(ad);
			localStorage.setItem("savedAd", JSON.stringify(savedAd));
		}
		setSaved(localStorage.getItem("savedAd"));
	};

	const getButtonState = (ad: AdProps["advertisement"]) => {
		if (typeof saved === "string") {
			if (saved.indexOf(ad.uuid) == -1) return false;
			else return true;
		}
		return false;
	};

	return (
		<div>
			{ads.length === 0 && <h2>No Data available</h2>}
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
						<button
							className="btn btn-primary"
							style={{ margin: "1%" }}
							onClick={() => openHandler(ad)}
						>
							Open
						</button>
						<button
							className="btn btn-success"
							style={{ margin: "1%" }}
							onClick={() => saveHandler(ad)}
							disabled={getButtonState(ad)}
						>
							Save
						</button>
					</div>
				);
			})}
			<br />
			<button
				className="btn btn-primary"
				onClick={prevHandler}
				disabled={first}
			>
				prev
			</button>
			<button
				className="btn btn-primary"
				style={{ marginLeft: "88%" }}
				onClick={nextHandler}
				disabled={last}
			>
				next
			</button>
		</div>
	);
};

export default Home;
