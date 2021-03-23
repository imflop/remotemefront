import React from 'react';
import { Link } from "react-router-dom";
import { getHumanTimeFromNow } from "../../utils/dateTimeFormat";

import './JobCard.scss';

type Job = {
    uuid: string
    short_description: string;
    scope: string;
    created_at: string,
    city: string,
};

const JobCard: React.ElementType = ({uuid, short_description, created_at, city, scope}: Job) => {

    const formattedDate = getHumanTimeFromNow(created_at);

    return (
        <div className="card card_job">
            <div className="card__body">
                <Link to={`/jobs/${uuid}`}>
                    {short_description}
                </Link>
            </div>
            <div className="card__footer">
                <ul className="list list_separator list_job-card">
                    <li className="list_item">Posted {formattedDate}</li>
                    <li className="list_item">{city}</li>
                    <li className="list_item">{scope}</li>
                </ul>
            </div>
        </div>
    );
};

export default JobCard;