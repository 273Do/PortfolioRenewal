import { ToolObj } from "@/features/tool/types";

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
  technologiesObj: ToolObj;
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

export type { WorkObj, WorksResponse };
