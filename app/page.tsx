import { Metadata } from "next";

import Button from "~components/Button/Button";

export const metadata: Metadata = {
  title: "Sunjay Armstead | Home",
  description:
    "Hey, I'm Sunjay 👋🏽. I'm a UI/UX designer and full stack software engineer with a knack for optimizing user interfaces. Are you hiring? Let's chat!",
};

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-[350px] bg-blooper dark:bg-prettyDark">
        <h1 className="text-white font-serif text-4xl lg:text-5xl mb-2">
          Ditch the search.
        </h1>
        <h2 className="text-white text-xl lg:text-2xl mb-6 lg:mb-8">
          Land your best hire today.
        </h2>
        <Button href="#about" backgroundType="clear">
          Meet Sunjay
        </Button>
      </section>
    </>
  );
}
