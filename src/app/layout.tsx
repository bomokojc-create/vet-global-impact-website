import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vetglobalimpact.com"),
  title: {
    default: "VET Global Impact | Veterans Support & Youth Tech Training in DRC",
    template: "%s | VET Global Impact",
  },
  description:
    "VET Global Impact empowers U.S. veterans and trains youth in the Democratic Republic of Congo in technology skills. Building bridges between service and global impact.",
  keywords: [
    "veterans support",
    "youth tech training",
    "DRC",
    "Congo",
    "non-profit",
    "veteran empowerment",
    "technology education",
    "global impact",
  ],
  authors: [{ name: "VET Global Impact" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vetglobalimpact.com",
    siteName: "VET Global Impact",
    title: "VET Global Impact | Veterans Support & Youth Tech Training",
    description:
      "Empowering U.S. veterans and training youth in DRC through technology education and community support.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VET Global Impact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VET Global Impact",
    description:
      "Empowering veterans and training youth in DRC through technology.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "GOOGLE_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#00379A" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
