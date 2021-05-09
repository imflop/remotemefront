const { RESTDataSource } = require('apollo-datasource-rest');

class GenericAPI extends RESTDataSource {
  constructor() {
    super();

    // Sets the base URL for the REST API
    this.baseURL = 'https://api.remoteme.dev/api/v1/';
  }
}

module.exports = GenericAPI;
