import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "권영우 | Frontend Engineer · Data & AI",
  description:
    "웹 서비스를 기획부터 배포까지 완성하고 데이터와 AI를 제품 경험으로 연결하는 프론트엔드 엔지니어 권영우의 포트폴리오입니다.",
  openGraph: {
    title: "권영우 | Frontend Engineer · Data & AI",
    description: "Tokit, fit-pt, Must-Fin, EF 프로젝트 중심 포트폴리오",
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
