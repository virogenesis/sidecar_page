import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sidecar_",
  description: "Sidecar company website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/wpr6rez.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
