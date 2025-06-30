import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dulce Brasil",
  description: "Pastelería y repostería brasileña",
  icons: {
    icon: "https://dulcebrasil.netlify.app/panaderia.png",
  },
  openGraph: {
    title: "Dulce Brasil",
    description: "Pastelería y repostería brasileña",
    url: "https://dulcebrasil.netlify.app/",
    siteName: "Dulce Brasil",
    images: [
      {
        url: "https://dulcebrasil.netlify.app/panaderia.png",
        width: 800,
        height: 600,
        alt: "Dulce Brasil Logo",
      }
    ]
  },
  twitter: {
    title: "Dulce Brasil",
    description: "Pastelería y repostería brasileña",
    card: "summary_large_image",
    site: "@dulcebrasil",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
