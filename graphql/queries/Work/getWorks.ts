import { gql } from "graphql-request";

// Worksクエリを定義

// limitが設定されている場合はヘッダーに表示するデータのみを取得
export const GET_Works = gql`
  query GetWorks($limit: Int) {
    worksCollection(order: createdAt_DESC, limit: $limit) {
      total
      items {
        sys {
          id
        }
        name
        description
        thumbnail {
          url
        }
        tags
      }
    }
  }
`;

// Worksの詳細を取得するクエリを定義
export const GET_WorkDetail = gql`
  query GETWorkDetail($id: String) {
    worksCollection(where: { sys: { id: $id } }) {
      items {
        name
        description
        period
        thumbnail {
          url
        }
        tags
        body
        techNames
        githubUrl
        appUrl
        otherUrl
        createdAt
      }
    }
  }
`;
