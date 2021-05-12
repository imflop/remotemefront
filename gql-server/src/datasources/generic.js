const { RESTAPI_BASE_URL } = require('../constants');
const { RESTDataSource } = require('apollo-datasource-rest');

class GenericAPI extends RESTDataSource {
  constructor() {
    super();

    // Sets the base URL for the REST API
    this.baseURL = RESTAPI_BASE_URL;
  }
}

module.exports = GenericAPI;
