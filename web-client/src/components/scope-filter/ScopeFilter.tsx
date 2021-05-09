import React from 'react';
import { Scope } from 'data/types';
import { Link } from 'react-router-dom';

import './ScopeFilter.scss';

const ScopeFilter: React.ElementType = ({id, title}: Scope) => {
    type iconOptions = {
        [key: string]: string
    }

    const icons: iconOptions = {
        "Product Manager": "📧",
        "Fullstack": "🛠",
        "Blockchain": "🔗",
        "Backend": "🖥",
        "Frontend": "💻",
        "DevOps": "🚀",
        "Data Science": "🧬",
        "QA": "🔎",
        "iOS": "🍏",
        "Mobile": "📱",
        "Android": "☎️"
    };

    return (
        <li className="text-center">
            <div className="card">
                <Link to={`${id}`} className="scope-filter">
                    <span>{icons[title]}</span>
                    <h5 className="title">{title}</h5>
                </Link>
            </div>
        </li>
    )
}

export default ScopeFilter;