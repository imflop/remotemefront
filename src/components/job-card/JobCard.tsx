import React from 'react';

import './JobCard.scss';

type Job = {
    uuid?: string
    short_description?: string;
    scope?: string;
};

const JobCard = ({uuid, short_description, scope}: Job) => {
    return (
        <div className="card">
            <div className="card__body">
                <a className="">{uuid}</a>
                <a className="">{short_description}</a>
            </div>
            <div className="card__footer">
                {scope}
            </div>
        </div>
    );
};

export default JobCard;