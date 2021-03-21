import React, {useEffect, useState} from "react";
import {VacanciesAPI} from "../api/Vacancies";
import JobCard from "../components/job-card/JobCard";


/**
 * Компонент главной страницы (/)
 */
const IndexPage: React.FunctionComponent = () => {

    const [vacanciesList, setVacanciesList] = useState<object[] | null>(null);

    const getVacanciesList = async () => {
        const data: Array<object> = await VacanciesAPI.list();
        setVacanciesList(() => data);
    }

    useEffect(() => {

        getVacanciesList();
    },[])

    if (!vacanciesList) {
        return <div>Загрузка...</div>
    }

    return (
        <>
            {vacanciesList.map((item => (
                <JobCard {...item} />
            )))}
        </>
    );
};

export default IndexPage;