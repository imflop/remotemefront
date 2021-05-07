import React from 'react';
import { Scope } from 'data/types';
import { Link } from 'react-router-dom';

const ScopeFilter: React.ElementType = ({id, title}: Scope) => {
    return (
        <ul>
            <li>
                <Link to={`${id}`} className="scope-filter">
                    <h5 className="title">{title}</h5>
                </Link>
            </li>
        </ul>
    )
}

export default ScopeFilter;