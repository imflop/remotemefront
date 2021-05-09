import {Scope, VacancyShortInfo } from "data/types";
import React, { useState, useEffect } from "react";
import JobCard from "../../components/job-card/JobCard";
import {gql, useQuery} from '@apollo/client';
import { useParams } from "react-router-dom";

import './IndexPage.scss';
import ScopeFilter from "../../components/scope-filter/ScopeFilter";

const GET_VACANCIES = gql`
  query GetVacancies($scope: ID, $offset: Int, $limit: Int) {
     vacancies(scope: $scope, offset: $offset, limit: $limit) {
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
    scopes {
        id
        title
    }
  }
`;

export type VacanciesVars = {
    scope: number|string,
    limit: number,
    offset: number
}
interface VacanciesData {
    vacancies: VacancyShortInfo[];
    scopes: Scope[];
}

/**
 * Компонент главной страницы (/)
 */
const IndexPage: React.FunctionComponent = () => {
    const [limit, setLimit] = useState(10);
    let { scope } = useParams<any>();
    const { loading, data, refetch, fetchMore } = useQuery<VacanciesData, VacanciesVars>(
        GET_VACANCIES,
        {
            variables: {
                scope: scope || "",
                offset: 0,
                limit: 10
            }, }
    );

    useEffect((): any => refetch({scope: scope}), [scope]);
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
        <>
            <div className="scope-list__wrapper">
                <ul className="scope-list">
                    {data?.scopes.map(((s: Scope) => (
                        <ScopeFilter key={s.id} {...s} />
                    )))}
                </ul>
            </div>
            <main className="container">
                {data?.vacancies.map(((item: VacancyShortInfo, i: number) => (
                    <JobCard key={i} {...item} />
                )))}
                <button onClick={handleClick}>Получить больше контента</button>
            </main>
        </>
    );
};

export default IndexPage;
