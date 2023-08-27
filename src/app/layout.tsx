import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainHeader from "../conponents/main-header/main-header";
import ThemeRegistry from "@/conponents/ThemeRegistry/ThemeRegistry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "سایت عروسک",
  description: "by dabir_rahmani",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html dir="rtl" lang="fa">
      <head>
        <link rel="stylesheet" href="./fonts/lalezar.css" />
      </head>
      <body>
        <ThemeRegistry>
          <header className={inter.className}>
            <MainHeader />
          </header>

          <div
            className={inter.className}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
            }}
          >
            {children}
          </div>
        </ThemeRegistry>
      </body>
    </html>
  );
}
