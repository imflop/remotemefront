import { PaginatedResponse, ShortAdvert } from "api/types";
import React, {useEffect, useState} from "react";
import { JobsAPI } from "../../api/jobs/jobs";
import JobCard from "../../components/job-card/JobCard";

import './IndexPage.scss';


/**
 * Компонент главной страницы (/)
 */
const IndexPage: React.FunctionComponent = () => {

    const [jobsList, setJobsList] = useState<ShortAdvert[] | null>(null);

    const getJobsList = async () => {
        const data: PaginatedResponse = await JobsAPI.list();
        setJobsList(() => data.results);
    }

    useEffect(() => {
        getJobsList();
    },[])

    if (!jobsList) {
        return <div>Загрузка...</div>
    }

    return (
        <main className="container">
            {jobsList.map(((item: ShortAdvert, i: number) => (
                <JobCard key={i} {...item} />
            )))}
        </main>
    );
};

export default IndexPage;