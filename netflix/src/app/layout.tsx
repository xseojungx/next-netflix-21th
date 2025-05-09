'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import "./globals.css";
import NavBar from "@/components/common/NavBar";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-pretendard flex h-[100vh] w-full flex-col items-center justify-center bg-neutral-900 text-white">
        <div className="relative box-border flex h-full w-full max-w-[375px] flex-col pb-[3.5rem]">
        <QueryClientProvider client={queryClient}>
        {children}
        </QueryClientProvider>
        </div>
        <NavBar />
      </body>
    </html>
  );
}