import { gql } from "graphql-request";

// Galleryクエリを定義
export const GET_Galleries = gql`
  query GetGalleries {
    galleriesCollection {
      items {
        sys {
          id
        }
        title
        description
        eventDate
        image {
          url
        }
      }
    }
  }
`;
