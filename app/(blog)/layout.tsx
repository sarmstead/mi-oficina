import "~/blog.css";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="mt-[84px] lg:mt-0">{children}</main>;
}
