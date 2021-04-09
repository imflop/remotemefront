import React from 'react';
import { getHumanTimeFromNow } from "../../utils/dateTimeFormat";

import './JobCard.scss';
import { FullAdvert } from 'api/types';

const JobCard: React.ElementType = ({short_description, scope, stack, long_description, created_at, company_name, city}: FullAdvert) => {

    const formattedDate = getHumanTimeFromNow(created_at);

    return (
        <div className="job-card">
            <h1>{short_description}</h1>
            <ul className="list list_separator list_job-details">
                <li className="list__item">Posted {formattedDate}</li>
                <li className="list__item">{company_name}</li>
                <li className="list__item">{city}</li>
            </ul>
            <div>{scope}: {stack.join(', ')}</div>
            <div>{long_description}</div>
        </div>
    );
};

export default JobCard;