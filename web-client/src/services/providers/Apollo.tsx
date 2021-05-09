import React from "react";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider
} from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";

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
        uri: 'http://localhost:3001',
        cache
    });

    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    );
};

export default ApolloQglProvider;
