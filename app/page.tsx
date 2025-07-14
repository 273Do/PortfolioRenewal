import type { Metadata } from "next";

import SmoothScroller from "@/components/layouts/SmoothScroller";
import * as Main from "@/features/main/components";
import Layout from "@/features/main/components/Layout/Layout";

export const metadata: Metadata = {
  title: "273* Portfolio | About",
};

export const revalidate = 60;

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
      <Main.ContactSection />
    </>
  );
}
