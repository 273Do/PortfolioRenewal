import { gql } from "graphql-request";

// Noticeクエリを定義
export const GET_Notices = gql`
  query GetNotices {
    noticesCollection(order: createdAt_DESC) {
      items {
        sys {
          id
        }
        title
        description
        url
        createdAt
      }
    }
  }
`;
