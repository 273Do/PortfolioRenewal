import { gql } from "graphql-request";

// FAQクエリを定義
export const GET_FAQ = gql`
  query GetFAQ {
    faqCollection {
      items {
        sys {
          id
        }
        title
        description
      }
    }
  }
`;
