import { Metadata } from "next";

import { Hero } from "~/home/Hero";
import { About } from "~/home/About";
import { Work } from "~/home/Work";
import ContactSection from "~components/ContactSection";

export const metadata: Metadata = {
  title: "Sunjay Armstead | Home",
  description:
    "Hey, I'm Sunjay 👋🏽. I'm a UI/UX designer and full stack software engineer with a knack for optimizing user interfaces. Are you hiring? Let's chat!",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <About />
      <Work />
      <ContactSection />
    </div>
  );
}
