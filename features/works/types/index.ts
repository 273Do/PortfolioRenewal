type WorkObj = {
  sys: {
    id: string;
  };
  name: string;
  description: string;
  period: string;
  tags: string[];
  body: string;
  thumbnail: {
    url: string;
  };
  techNames: string[];
  githubUrl: string;
  appUrl?: string;
  otherUrl?: string;
  createdAt: string;
};

type WorksResponse = {
  worksCollection: {
    total: number;
    items: WorkObj[];
  };
};

type RepositoryDetailObj = {
  issues: number;
  commits: number;
  pullRequests: number;
  branches: number;
  contributors: number;
};

export type { WorkObj, WorksResponse, RepositoryDetailObj };
