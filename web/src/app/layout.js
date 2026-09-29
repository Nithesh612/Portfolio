import "./globals.css";
import "./styles/bootstrap.min.css";
import "./styles/swiper-bundle.css";
import "./styles/magnific-popup.css";
import "./styles/aos.css";
import "./styles/main.css";
import ScriptLoader from "./SmoothScroll/ScriptLoader";
import Scroll from "./SmoothScroll/SmoothScroll";
export const metadata = {
  title: "Nithesh Kumar R",
  description:
    "Nithesh Kumar R - MCA - Personal Portfolio & Full Stack Developer. Fully responsive, creative design.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Phudu:wght@300..900&family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="tw-magic-cursor" suppressHydrationWarning>
        <Scroll>
          {children}
        </Scroll>
        <ScriptLoader />
      </body>
    </html>
  );
}
