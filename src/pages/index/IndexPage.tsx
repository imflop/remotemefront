import { ShortAdvert } from "data/types";
import React, {useContext, useEffect, useState} from "react";
import {APIContext} from "../../data/api/API";
import JobCard from "../../components/job-card/JobCard";

import './IndexPage.scss';


/**
 * Компонент главной страницы (/)
 */
const IndexPage: React.FunctionComponent = () => {
    const api = useContext(APIContext);

    const [vacancies, setVacancies] = useState<ShortAdvert[]>();

    useEffect(() => {
        api.vacancies.fetchVacancies().then(setVacancies);
    },[])

    if (!vacancies) {
        return <div>Загрузка...</div>
    }

    return (
        <main className="container">
            {vacancies.map(((item: ShortAdvert, i: number) => (
                <JobCard key={i} {...item} />
            )))}
        </main>
    );
};

export default IndexPage;