import "./globals.css";
import "./components/css/bootstrap.min.css";
import "./components/css/swiper-bundle.css";
import "./components/css/magnific-popup.css";
import "./components/css/aos.css";
import "./components/css/main.css";

export const metadata = {
  title: "Nithesh Kumar R",
  description:
    "Nithesh Kumar R, MCA - Personal Portfolio & Full Stack Developer. Fully responsive, creative design.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Phudu:wght@300..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="tw-magic-cursor" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
