import { ShortAdvert } from 'api/types';
import React from 'react';
import { Link } from "react-router-dom";
import { getHumanTimeFromNow } from "../../utils/dateTimeFormat";

import './JobCard.scss';

const JobCard: React.ElementType = ({uuid, short_description, created_at, company_name, city}: ShortAdvert) => {

    const formattedDate = getHumanTimeFromNow(created_at);

    return (
        <Link to={`/jobs/${uuid}`} className="job-card">
            <h2 className="job-card__title">{short_description}</h2>
            <ul className="list list_separator list_job-details">
                <li className="list__item">Posted {formattedDate}</li>
                <li className="list__item">{company_name}</li>
                <li className="list__item">{city}</li>
            </ul>
        </Link>
    );
};

export default JobCard;