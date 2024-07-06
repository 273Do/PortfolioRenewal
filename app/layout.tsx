// import { Inter } from "next/font/google";

// eslint-disable-next-line import/order
import { Toaster } from "@/components/ui/sonner";

import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

import "./globals.css";
import * as Layout from "@/app/components/index";
import { ThemeProvider } from "@/components/theme-provider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "273* Portfolio",
  description: "273* Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link
        rel="apple-touch-icon"
        href="/apple-touch-icon.png"
        type="image/png"
        sizes="any"
      />
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Layout.Header />
          {children}
          <Toaster />
          <Layout.Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
