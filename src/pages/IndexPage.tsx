import React, {useEffect, useState} from "react";
import {JobsAPI} from "../api/jobs/jobs";
import JobCard from "../components/job-card/JobCard";


/**
 * Компонент главной страницы (/)
 */
const IndexPage: React.FunctionComponent = () => {

    const [jobsList, setJobsList] = useState<object[] | null>(null);

    const getJobsList = async () => {
        const data: Array<object> = await JobsAPI.list();
        setJobsList(() => data);
    }

    useEffect(() => {

        getJobsList();
    },[])

    if (!jobsList) {
        return <div>Загрузка...</div>
    }

    return (
        <>
            {jobsList.map(((item, i) => (
                <JobCard key={i} {...item} />
            )))}
        </>
    );
};

export default IndexPage;