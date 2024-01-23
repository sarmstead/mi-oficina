import "~/globals.css";
import TopNav from "~components/TopNav/TopNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-black">
        <TopNav />
        <main>{children}</main>
      </body>
    </html>
  );
}
