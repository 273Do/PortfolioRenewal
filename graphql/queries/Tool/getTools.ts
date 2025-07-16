import { gql } from "graphql-request";

// Toolsクエリを定義
export const GET_Tools = gql`
  query GetTools {
    toolCollection {
      items {
        toolNames
      }
    }
  }
`;
