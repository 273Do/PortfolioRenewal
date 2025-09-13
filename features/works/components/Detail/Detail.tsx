import React from "react";
import ReactMarkdown from "react-markdown";

import { format } from "date-fns";
import {
  CircleDot,
  GitBranch,
  GitCommitVertical,
  GitPullRequestArrow,
  UsersRound,
} from "lucide-react";

import MarqueeWidget from "@/components/Marquee/Marquee";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import type { RepositoryDetailObj, WorkObj } from "../../types";

const Detail = ({
  detail,
  repo_stats,
}: {
  detail: WorkObj;
  repo_stats: RepositoryDetailObj;
}) => {
  return (
    <div className="flex size-full flex-row items-start justify-center">
      <div className=" flex w-full max-w-[700px] flex-wrap ">
        <div className="flex size-full flex-col gap-5">
          <div>
            <div className="flex items-center justify-between text-muted-foreground">
              <p>
                リリース ：{" "}
                {format(
                  new Date(detail.createdAt).toLocaleDateString(),
                  "yyyy-MM-dd"
                )}{" "}
                （{detail.period}）
              </p>
              <div className="flex items-center gap-3">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center justify-center gap-1">
                      <GitBranch className="size-[1.0rem]" />
                      <p className="text-foreground">{repo_stats.branches}</p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Branch数</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center justify-center gap-1">
                      <GitCommitVertical className="size-[1.0rem]" />
                      <p className="text-foreground">{repo_stats.commits}</p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Commit数</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center justify-center gap-1">
                      <GitPullRequestArrow className="size-[1.0rem]" />
                      <p className="text-foreground">
                        {repo_stats.pullRequests}
                      </p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>PullRequest数</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center justify-center gap-1">
                      <CircleDot className="size-[1.0rem]" />
                      <p className="text-foreground">{repo_stats.issues}</p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Issue数</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center justify-center gap-1">
                      <UsersRound className="size-[1.0rem]" />
                      <p className="text-foreground">
                        {repo_stats.contributors}
                      </p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>貢献人数</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
            <div className="my-4">
              <MarqueeWidget
                iconName={detail.techNames}
                direction="left"
                mode="detail"
              />
            </div>
            <Separator />
            <div className="md mb-3 mt-4 sm:mb-6">
              <ReactMarkdown>{detail.body}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
