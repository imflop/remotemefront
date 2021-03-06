import { ShortAdvert, Scope } from "data/types";
import React, {useContext, useEffect, useState} from "react";
import {APIContext} from "../../data/api/API";
import JobCard from "../../components/job-card/JobCard";
import ScopeFilter from "../../components/scope-filter/ScopeFilter";

import './IndexPage.scss';


/**
 * Компонент главной страницы (/)
 */
const IndexPage: React.FunctionComponent = () => {
    const api = useContext(APIContext);

    const [vacancies, setVacancies] = useState<ShortAdvert[]>();
    const [scope, setScopes] = useState<Scope[]>();

    useEffect(() => {
        api.vacancies.fetchVacancies().then(setVacancies);
        api.vacancies.fetchScopes().then(setScopes);
    },[])

    if (!vacancies) {
        return <div>Загрузка...</div>
    }

    if (!scope) {
        return <div>Loading scopes ...</div>
    }

    return (
        <main className="container">
            <ul className="list-inline">
                {scope.map((s: Scope) => (
                    <ScopeFilter key={s.id} {...s} />
                ))}
            </ul>


            {vacancies.map((item: ShortAdvert, i: number) => (
                <JobCard key={i} {...item} />
            ))}
        </main>
    );
};

export default IndexPage;