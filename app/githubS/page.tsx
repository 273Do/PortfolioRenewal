"use client";
import React from "react";

import Image from "next/image";
import { useTheme } from "next-themes";

const Page = () => {
  const { theme } = useTheme();
  return (
    <div>
      <div className="h-14"></div>
      <p>github status</p>
      <Image
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=273do"
        alt="Github Stats"
        width={500}
        height={200}
        className="rounded-lg"
      />
      <img
        src={`https://github-readme-stats.vercel.app/api?username=273do&layout=compact&theme=${
          theme === "light" ? "light" : "dark"
        }&outline=0&border_radius=25&show_icons=true&count_private=true&hide=prs,issues`}
        alt="Github Stats"
        // className="rounded-lg"
      />
      <img
        src={`https://github-profile-trophy.vercel.app/api?username=273do&layout=compact&theme=${
          theme === "light" ? "light" : "darkhub"
        }&column=7&title=MultiLanguage,Commits,Issue,PullRequest,Repositories,Followers&margin-w=10`}
        alt="Github Stats"
        // className="rounded-lg"
      />
    </div>
  );
};

export default Page;
