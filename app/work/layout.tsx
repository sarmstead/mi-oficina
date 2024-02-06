import "~/globals.css";
import ContactSection from "~components/ContactSection";

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto">
      {children}
      <ContactSection />
    </section>
  );
}
