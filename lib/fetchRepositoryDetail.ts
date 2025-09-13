import { GET_Repository_Detail } from "@/graphql/queries/Work/getRepositoryDetail";

export async function getRepoStats(repoUrl: string) {
  // URLからownerとnameを抽出
  const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
  if (!match) throw new Error("Invalid GitHub repository URL");

  const owner = match[1];
  const name = match[2];

  const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  // API リクエスト
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `bearer ${GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: GET_Repository_Detail,
      variables: { owner, name },
    }),
  });

  const result = await response.json();

  if (result.errors) {
    console.error(result.errors);
    throw new Error("GitHub GraphQL query failed");
  }

  const repo = result.data.repository;

  return {
    issues: repo.issues.totalCount,
    pullRequests: repo.pullRequests.totalCount,
    branches: repo.refs.totalCount,
    commits: repo.defaultBranchRef.target.history.totalCount,
    contributors: repo.collaborators.totalCount,
  };
}
