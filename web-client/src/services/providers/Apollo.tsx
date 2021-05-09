import React from "react";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider
} from "@apollo/client";

const ApolloQglProvider: React.ElementType = ({children}) => {
    const client = new ApolloClient({
        uri: 'https://48p1r2roz4.sse.codesandbox.io',
        cache: new InMemoryCache()
    });

    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    );
};

export default ApolloQglProvider;
