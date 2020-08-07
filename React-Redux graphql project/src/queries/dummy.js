import { gql } from "apollo-boost";

export const getUserById = gql`
  query getUserById($id: ID!) {
    user(id: $id) {
      id
      name
    }
  }
`;
