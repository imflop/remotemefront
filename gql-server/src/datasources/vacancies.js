const GenericAPI = require('./generic');

class VacanciesAPI extends GenericAPI {
  constructor() {
    super();
  }

  async getVacancies(scope = "", pageSize, after = 0) {
    const response = await this.get('adverts/list', {
      // Query parameters
      limit: pageSize,
      offset: after,
      scope
    });
    return response.results
  }

  async getScopes() {
    return await this.get('scope/list');
  }
}

module.exports = VacanciesAPI;