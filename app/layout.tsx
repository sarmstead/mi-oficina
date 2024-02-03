/* eslint-disable @next/next/no-sync-scripts */

import "~/globals.css";
import { Providers } from "~/store/providers";
import TopNav from "~components/TopNav/TopNav";
import Footer from "~/components/Footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          src={`https://www.google.com/recaptcha/enterprise.js?render=${process.env.GOOGLE_KEY_ID}`}
        ></script>
      </head>
      <body className="bg-white dark:bg-black">
        <Providers>
          <TopNav />
          <main className="mt-[84px] lg:mt-0">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
