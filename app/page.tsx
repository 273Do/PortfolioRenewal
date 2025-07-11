import type { Metadata } from "next";

import Layout from "@/features/main/components/Layout/Layout";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "273* Portfolio | About",
};

export default async function Home() {
  return (
    <>
      <Layout />
    </>
  );
}
