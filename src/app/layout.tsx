import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  variable: "--font-poppins",
  display: "swap",
});

// export const metadata: Metadata = {
//   metadataBase: new URL(process.env.NEXT_PUBLIC_URL!),

//   title: "Jfive Digital",
//   description: "Transform Your Business with Technology",

//   verification: {
//     google: process.env.GOOGLE_SEARCH_CONSOLE_VERIFICATION,
//   },

//   openGraph: {
//     title: "Jfive Digital",
//     description: "Transform Your Business with Technology",
//     url: "https://jfivedigital.vercel.app",
//     siteName: "Jfive Digital",
//     images: [
//       {
//         url: "https://jfivedigital.vercel.app/thumbnail.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Jfive Digital",
//       },
//     ],
//     locale: "id_ID",
//     type: "website",
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_TRACKING_ID =
    process.env.GOOGLE_TAGS_MANAGER_ID || "-";

  return (
    <html
      lang="id"
      className={`${poppins.variable} antialiased`}
    >
      <body className={`${poppins.className} min-h-full flex flex-col`}>
        {children}
      </body>

      <GoogleAnalytics gaId={GA_TRACKING_ID} />
    </html>
  );
}