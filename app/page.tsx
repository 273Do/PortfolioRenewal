import type { Metadata } from "next";

import * as Main from "@/features/main/components";
import Layout from "@/features/main/components/Layout/Layout";

import SmoothScroller from "./components/layouts/SmoothScroller";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "273* Portfolio | About",
};

export default async function Home() {
  return (
    <>
      <Layout />
      <SmoothScroller />
      <Main.HeroSection />
      <Main.NoticeSection />
      <Main.CreativeSection />
      <Main.WorksSection />
      <Main.ActivitySection />
    </>
  );
}
