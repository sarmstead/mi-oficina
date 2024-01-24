import { Metadata } from "next";
import Image from "next/image";

import Button from "~components/Button/Button";
import rectangleHeadshot from "../public/assets/images/headshot--rectangle.jpg";
import circleHeadshot from "../public/assets/images/headshot--circle.png";

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
    </div>
  );
}

const Hero = () => (
  <section className="flex flex-col items-center justify-center min-h-[350px] bg-blooper dark:bg-prettyDark w-full">
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
);

const About = () => (
  <section
    id="about"
    className="px-5 py-12 grid gap-6 md:py-16 md:items-center md:grid-cols-[293px_1fr] max-w-[954px]"
  >
    <Image
      src={rectangleHeadshot}
      alt="Sunjay Armstead smiling big in a jade green collared shirt"
      className="block w-full md:hidden"
    />
    <Image
      src={circleHeadshot}
      alt="Sunjay Armstead smiling big in a jade green collared shirt"
      className="hidden md:w-full md:block"
    />
    <section className="flex flex-col gap-6">
      <section className="flex flex-col gap-3 text-black dark:text-white">
        <h2 className="text-3xl font-serif">It’s me, Sunjay!</h2>
        <p className="text-base leading-7">
          If you’re reading this, you likely have a few thorny problems to
          solve. And you specifically need someone who understands your
          challenges and has the proficiency to solve them. In other
          words,&nbsp;<strong>you need a generalist:</strong>&nbsp;someone who
          specializes in comprehending the big picture. As a generalist 👉🏽
        </p>
        <ul className="text-base leading-7 list-disc ml-7">
          <li>I bring broad and diverse perspectives.</li>
          <li>I unify design and engineering teams.</li>
          <li>
            I design, build, and ship solutions that your team and customers
            will love.
          </li>
        </ul>
      </section>
      <Button backgroundType="solid" href="#work">
        Prove it, Sunjay
      </Button>
    </section>
  </section>
);
