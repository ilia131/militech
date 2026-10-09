
import type { Metadata } from "next";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "MILITECH | Engineering the Future",
  description:
    "MILITECH builds intelligent software, AI systems, robotics, and future technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
