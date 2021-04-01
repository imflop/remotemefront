import React, {useEffect, useState} from 'react';
import {
    useParams
} from "react-router-dom";

import JobCardDetail from "../../../components/job-card/JobCardDetail";
import {JobsAPI} from "../../../api/jobs/jobs";

const JobDetail: React.FunctionComponent = () => {
    // @ts-ignore
    let { uuid } = useParams();
    const [jobDetail, setJobDetail] = useState<object[] | null>(null);

    const getJobDetail = async () => {
        const data: Array<object> = await JobsAPI.id(uuid);
        setJobDetail(() => data);
    };

    useEffect(() => {
        getJobDetail();
    }, []);

    if (jobDetail === null) {
        return <div>Загрузка...</div>;
    }

    return (
        <main className="container">
            <JobCardDetail {...jobDetail} />
        </main>
    );
};

export default JobDetail;