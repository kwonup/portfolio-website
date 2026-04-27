import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "권영우 | Frontend Engineer",
  description: "문제 해결과 사용자 흐름을 설계하는 프론트엔드 엔지니어 권영우의 포트폴리오입니다.",
  openGraph: {
    title: "권영우 | Frontend Engineer",
    description: "Tokit, Must-Fin, EF 등 프론트엔드 프로젝트 중심 포트폴리오",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
