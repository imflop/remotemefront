import React from "react";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider
} from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";
import {GRAPHQL_BASE_URL, GRAPHQL_PORT} from "../../data/constants";


const ApolloQglProvider: React.ElementType = ({children}) => {
    const cache = new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    vacancies: offsetLimitPagination(["scope"])
                },
            },
        },
    });

    const client = new ApolloClient({
        uri: `${GRAPHQL_BASE_URL}:${GRAPHQL_PORT}`,
        cache
    });

    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    );
};

export default ApolloQglProvider;
