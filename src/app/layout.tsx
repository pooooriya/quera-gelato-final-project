"use client";

import type { Metadata } from "next";
import "@/styles/globals.css";
import { Provider } from "react-redux";

import { Vazirmatn } from "next/font/google";
import { Store } from "@/context/store";

const font = Vazirmatn({ subsets: ["arabic"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={font.className}>
        <Provider store={Store}>{children}</Provider>
      </body>
    </html>
  );
}
