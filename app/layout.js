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
  title: "Brasilius",
  description: "Desde la calidez de Brasil, traemos los sabores más auténticos y deliciosos de la repostería brasileña. Disfruta de nuestros pasteles y dulces tradicionales, elaborados con amor y pasión por la cocina brasileña.",
  icons: {
    icon: "https://dulcebrasil.netlify.app/image_2.jpg",
  },
  openGraph: {
    title: "Brasilius",
    description: "Desde la calidez de Brasil, traemos los sabores más auténticos y deliciosos de la repostería brasileña. Disfruta de nuestros pasteles y dulces tradicionales, elaborados con amor y pasión por la cocina brasileña.",
    url: "https://dulcebrasil.netlify.app/",
    siteName: "Brasilius",
    images: [
      {
        url: "https://dulcebrasil.netlify.app/image_2.jpg",
        width: 800,
        height: 600,
        alt: "Brasilius Logo",
      }
    ]
  },
  twitter: {
    title: "Brasilius",
    description: "Desde la calidez de Brasil, traemos los sabores más auténticos y deliciosos de la repostería brasileña. Disfruta de nuestros pasteles y dulces tradicionales, elaborados con amor y pasión por la cocina brasileña.",
    card: "summary_large_image",
    site: "@dulcebrasil",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap" rel="stylesheet"/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
