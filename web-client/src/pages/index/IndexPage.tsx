import { VacancyShortInfo } from "data/types";
import React, { useState } from "react";
import JobCard from "../../components/job-card/JobCard";
import { gql, useQuery } from '@apollo/client';

import './IndexPage.scss';

const GET_VACANCIES = gql`
  query GetVacancies($offset: Int, $limit: Int) {
     vacancies(offset: $offset, limit: $limit) {
        uuid
        short_description
        created_at
        stack
        scope
        salary_from
        salary_to
        city
        company_name
        currency
    }
  }
`;

type VacanciesVars = {
    scope: number|string,
    limit: number,
    offset: number
}
interface VacanciesData {
    vacancies: VacancyShortInfo[];
}

/**
 * Компонент главной страницы (/)
 */
const IndexPage: React.FunctionComponent = () => {
    const [limit, setLimit] = useState(10);
    const { loading, data, fetchMore } = useQuery<VacanciesData, VacanciesVars>(
        GET_VACANCIES,
        {
            variables: {
                scope: "",
                offset: 0,
                limit: 10
            }, }
    );

    if (loading) {
        return <div>Загрузка...</div>
    }

    const handleClick = () => {
        const currentLength = data?.vacancies.length;
        fetchMore({
            variables: {
                offset: currentLength,
                limit,
            },
        }).then((fetchMoreResult: any) => {
            // Update variables.limit for the original query to include
            // the newly added feed items.
            setLimit(currentLength + fetchMoreResult.data.vacancies.length);
        });
    }

    return (
        <main className="container">
            {data?.vacancies.map(((item: VacancyShortInfo, i: number) => (
                <JobCard key={i} {...item} />
            )))}
            <button onClick={handleClick}>Получить больше контента</button>
        </main>
    );
};

export default IndexPage;
