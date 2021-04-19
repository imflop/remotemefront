import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import JobCardDetail from "../../../components/job-card/JobCardDetail";
import {VacancyInfo} from "../../../data/types";
import {APIContext} from "../../../data/api/API";

const JobDetail: React.FunctionComponent = () => {
    const api = useContext(APIContext);
    // @ts-ignore
    let { uuid } = useParams();
    const [vacancy, setVacancy] = useState<VacancyInfo>();

    useEffect(() => {
        api.vacancies.fetchVacancy(uuid).then(setVacancy);
    }, [uuid]);

    if (!vacancy) {
        return <div>Загрузка...</div>;
    }

    return (
        <main className="container">
            <JobCardDetail {...vacancy} />
        </main>
    );
};

export default JobDetail;