"use client";

import { useTheme } from "next-themes";
import React from "react";
import type { ThemeInput } from "react-github-calendar";
import GitHubCalendar from "react-github-calendar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Activity {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

const selectLastSevenWeeks = (contributions: Array<Activity>) => {
  const today = new Date();
  const sevenWeeksAgo = new Date(today.getTime() - 6 * 7 * 24 * 60 * 60 * 1000); // 7週間前の日付

  return contributions.filter((activity: Activity) => {
    const date = new Date(activity.date);
    return date >= sevenWeeksAgo && date <= today;
  });
};
const explicitTheme: ThemeInput = {
  light: ["#EEEEEE", "#27272a"],
  dark: ["#27272a", "#fafafa"],
};

const GitCalendar = () => {
  const { theme } = useTheme();
  return (
    <div>
      <GitHubCalendar
        username="273Do"
        transformData={selectLastSevenWeeks}
        blockMargin={7}
        blockSize={13}
        hideColorLegend={true}
        hideMonthLabels={true}
        hideTotalCount={true}
        theme={explicitTheme}
        colorScheme={theme as "light" | "dark" | undefined}
        renderBlock={(block, activity) => (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>{block}</TooltipTrigger>
              <TooltipContent>
                <p>
                  {activity.count} activities on {activity.date}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      />
    </div>
  );
};

export default GitCalendar;
