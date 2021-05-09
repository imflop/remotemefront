const resolvers = {
  Query: {
    vacancies: async (_, { scope, pageSize, after }, {dataSources}) => {
      return dataSources.vacanciesAPI.getVacancies(scope, pageSize, after);
    },
    scopes: async (_, __, {dataSources}) => {
      return dataSources.vacanciesAPI.getScopes();
    }
  }
};

module.exports = resolvers;
