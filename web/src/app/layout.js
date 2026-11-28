import "./globals.css";
import "./styles/bootstrap.min.css";
import "./styles/swiper-bundle.css";
import "./styles/magnific-popup.css";
import "./styles/aos.css";
import "./styles/main.css";
import ScriptLoader from "./SmoothScroll/ScriptLoader";
import Scroll from "./SmoothScroll/SmoothScroll";
import Chatbot from "./chatbot/chatbot";
import { siteMetadata } from "./seo/og-tag";
import { schema } from "./seo/aeo/schema";

export const metadata = siteMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icon-48.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Allura&family=Doto:wght@100..900&family=Great+Vibes&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Pinyon+Script&family=Playball&family=Plus+Jakarta+Sans:wght@600;700;800;900&family=Phudu:wght@300..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="tw-magic-cursor" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Scroll>
          {children}
        </Scroll>
        <Chatbot />
        <ScriptLoader />

      </body>
    </html>
  );
}

