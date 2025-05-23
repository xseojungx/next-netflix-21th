import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import NavBar from "@/components/common/NavBar";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "CEOS Netflix",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-pretendard flex h-[100vh] w-full flex-col items-center justify-center bg-neutral-900 text-white">
        <div className="relative box-border flex h-full w-full max-w-[450px] flex-col pb-[3.5rem]">
          <Providers>{children}</Providers>
        </div>
        <NavBar />
      </body>
    </html>
  );
}
