import { GraphQLClient } from "graphql-request";

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`;

// GraphQLClient インスタンスを作成
const client = new GraphQLClient(endpoint, {
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
  },
});

export default client;
