import { Suspense } from "react";

import type { Metadata } from "next";

import SmoothScroller from "@/components/layouts/SmoothScroller";
import * as Main from "@/features/main/components";
import Layout from "@/features/main/components/Layout/Layout";
import MainCanvas from "@/features/main/components/Layout/Three/MainCanvas";

export const metadata: Metadata = {
  title: "273* Portfolio | About",
};

export const revalidate = 60;

export default async function Home() {
  return (
    <>
      <Layout />
      <Suspense>
        <MainCanvas className="logo-3d fixed top-0" />
      </Suspense>
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
