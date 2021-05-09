const { ApolloServer } = require('apollo-server');
const VacanciesAPI = require('./datasources/vacancies');

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
});

// The `listen` method launches a web server.
server.listen({port: 3001}).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
