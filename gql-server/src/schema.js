const { gql } = require('apollo-server');

const typeDefs = gql`
  type Scope {
    id: String
    title: String
  }

  type Vacancy {
    uuid: String,
    short_description: String,
    created_at: String,
    stack: [String],
    scope: String,
    salary_from: Int,
    salary_to: Int,
    city: String,
    company_name: String,
    currency: String
  }
  
  type Query {
    vacancies(scope: ID, limit: Int, offset: Int): [Vacancy]
    scopes: [Scope]
  }
`;

module.exports = typeDefs;
