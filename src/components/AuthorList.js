import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Text } from "evergreen-ui"

const GET_AUTHORS = gql`
  query {
    author {
      id
      name
    }
  }
`;

const AuthorList = () => {
  const { loading, error, data } = useQuery(GET_AUTHORS);

  if (loading) return "loading...";
  if (error) return `error: ${error.message}`;

  return (
    <div>
      <Text>
        {data.author.map((author, index) => (
          <div key={index}>
            <h2>{author.name}</h2>
          </div>
        ))}
      </Text>
    </div>

  );
};

export default AuthorList;
export { GET_AUTHORS };
