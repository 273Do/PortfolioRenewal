import { gql } from "graphql-request";

// Technologiesクエリを定義
export const GET_Technologies = gql`
  query GetTechnologies {
    technologiesCollection {
      items {
        technologyObj
      }
    }
  }
`;
