import React from "react";
import "./Design.css";
import {AdProps} from "./Types";

const AdScreen: React.FC<AdProps> = ({ad}) => {
    return (
        <div className="row" data-testid="ad-item">
            <div className="col-xs-2 col-lg-2 col-sm-2 col-md-2" data-testid="adDate">
                {(ad.published.slice(0, 10)).split("-").reverse().join(".")}
            </div>
            <div className="col-xs-3 col-lg-3 col-sm-3 col-md-3" data-testid="adJobTitle">
                {ad.jobtitle ? ad.jobtitle : "-"}
            </div>
            <div className="col-xs-5 col-lg-5 col-sm-5 col-md-5" data-testid="adTitle">
                {ad.title ? ad.title : "-"}
            </div>
        </div>
    );
};

export default AdScreen;
