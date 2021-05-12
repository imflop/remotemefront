require('dotenv').config({ path: '../.env' })

const __prod__ = process.env.NODE_ENV === "production";
const RESTAPI_BASE_URL = process.env.RESTAPI_BASE_URL;
const GRAPHQL_PORT = process.env.GRAPHQL_PORT;
const CORS_ORIGIN = process.env.CORS_ORIGIN;


module.exports = {
  __prod__,
  RESTAPI_BASE_URL,
  GRAPHQL_PORT,
  CORS_ORIGIN
}
