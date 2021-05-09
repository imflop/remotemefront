const resolvers = {
  Query: {
    vacancies: async (_, { scope, limit, offset }, {dataSources}) => {
      return dataSources.vacanciesAPI.getVacancies(scope, limit, offset);
    },
    scopes: async (_, __, {dataSources}) => {
      return dataSources.vacanciesAPI.getScopes();
    }
  }
};

module.exports = resolvers;
