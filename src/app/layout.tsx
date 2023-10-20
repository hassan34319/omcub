import type { Metadata } from "next";

import Header from "../components/NewHeader";
import Footer from "../components/Footer";

import './globals.css'
import "tailwindcss/tailwind.css";
import "../styles/app.css";
import "../styles/scss/files.scss";

import { ReduxProvider } from "../context/ReduxProvider";

const description =
  "Launch your own fully automated store with Snipcart, Printful, and Next.js";
const title = "Your SWAG store";
const url = "https://swag.nextdropshippingstarter.com";

const seo = {
  title,
  titleTemplate: "%s | Headless Dropshipping Starter",
  description,
  openGraph: {
    description,
    title,
    type: "website",
    url,
  },
  twitter: {
    handle: "@notrab",
    site: "@notrab",
  },
};

export const metadata: Metadata = {
  title,
  description,

}

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
        rel="stylesheet"
      ></link>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest"></link> */}
      <body className="antialiased">
        <ReduxProvider>
          <Header />
          <main className="py-2 md:pb-12">{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
