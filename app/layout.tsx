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
      <body className="bg-white dark:bg-black">
        <Providers>
          <TopNav />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
