import { gql } from "graphql-request";

// Repositoryの詳細を取得するクエリを定義
export const GET_Repository_Detail = gql`
  query ($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      issues(states: [OPEN, CLOSED]) {
        totalCount
      }
      pullRequests(states: [OPEN, CLOSED, MERGED]) {
        totalCount
      }
      refs(refPrefix: "refs/heads/") {
        totalCount
      }
      collaborators {
        totalCount
      }
      defaultBranchRef {
        target {
          ... on Commit {
            history {
              totalCount
            }
          }
        }
      }
    }
  }
`;
