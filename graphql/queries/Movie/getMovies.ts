import { gql } from "graphql-request";

// Movieクエリを定義
export const GET_Movies = gql`
  query GETMovies {
    moviesCollection {
      items {
        sys {
          id
        }
        title
        url
        tags
      }
    }
  }
`;
