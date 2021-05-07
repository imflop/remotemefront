import React from 'react';
import { Scope } from 'data/types';
import { Link } from 'react-router-dom';

import './ScopeFilter.scss';

const ScopeFilter: React.ElementType = ({id, title}: Scope) => {
    return (
        <li>
            <Link to={`${id}`} className="scope-filter">
                <span>🖥</span>
                <h5 className="title">{title}</h5>
            </Link>
        </li>
    )
}

export default ScopeFilter;