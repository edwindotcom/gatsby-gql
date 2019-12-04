const fetch = require(`node-fetch`);
const { createHttpLink } = require(`apollo-link-http`);

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "HASURA",
        fieldName: "hasura",
        createLink: () => {
          return createHttpLink({
            uri: "https://ew-gql.herokuapp.com/v1/graphql",
            headers: {},
            fetch
          });
        },
        refetchInterval: 10 // Refresh every 60 seconds for new data
      }
    }
  ]
};
