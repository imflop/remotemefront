const { ApolloServer } = require('apollo-server');
const VacanciesAPI = require('./datasources/vacancies');
const { GRAPHQL_PORT, CORS_ORIGIN } = require('./constants');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      vacanciesAPI: new VacanciesAPI(),
    };
  },
  cors: CORS_ORIGIN
});

// The `listen` method launches a web server.
server.listen({ port: GRAPHQL_PORT }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
