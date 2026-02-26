import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Huma Tejaswi Akkem — Software Engineer",
  description: "Portfolio focused on cloud systems, analytics pipelines, and applied machine learning.",
  openGraph: {
    title: "Huma Tejaswi Akkem — Software Engineer",
    description: "Cloud and data engineer focused on AWS serverless systems and production analytics.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ backgroundColor: "#121212" }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ backgroundColor: "#121212", fontFamily: "'Inter', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
