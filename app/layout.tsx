import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import * as layout from "@/app/components/index";
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
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <layout.Header />
          {children}
          <layout.Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
