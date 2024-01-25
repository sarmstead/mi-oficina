import "~/globals.css";
import TopNav from "~components/TopNav/TopNav";
import { Providers } from "./store/providers";

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
        </Providers>
      </body>
    </html>
  );
}
