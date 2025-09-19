import { Geist, Geist_Mono, Outfit } from "next/font/google";
import Providers from "./Providers";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Brasilius",
  description: "Desde la calidez de Brasil, traemos los sabores más auténticos y deliciosos de la repostería brasileña. Disfruta de nuestros pasteles y dulces tradicionales, elaborados con amor y pasión por la cocina brasileña.",
  icons: {
    icon: "https://brasilius.netlify.app/image_2.jpg",
  },
  openGraph: {
    title: "Brasilius",
    description: "Desde la calidez de Brasil, traemos los sabores más auténticos y deliciosos de la repostería brasileña. Disfruta de nuestros pasteles y dulces tradicionales, elaborados con amor y pasión por la cocina brasileña.",
    url: "https://brasilius.netlify.app/",
    siteName: "Brasilius",
    images: [
      {
        url: "https://brasilius.netlify.app/image_2.jpg",
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
    site: "@brasilius",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap" rel="stylesheet" />
        <Script id='claritydef' strategy="lazyOnload">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "tdbuitn4tl");`}
      </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
