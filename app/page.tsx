import { Metadata } from "next";
import Image from "next/image";

import Button from "~components/Button/Button";
import rectangleHeadshot from "../public/assets/images/headshot--rectangle.jpg";
import circleHeadshot from "../public/assets/images/headshot--circle.png";
import { Icon } from "~icon/index";
import { Logo } from "~logo/index";

export const metadata: Metadata = {
  title: "Sunjay Armstead | Home",
  description:
    "Hey, I'm Sunjay 👋🏽. I'm a UI/UX designer and full stack software engineer with a knack for optimizing user interfaces. Are you hiring? Let's chat!",
};

type CaseStudyProps = {
  href: string;
};

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <About />
      <Work />
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
      className="hidden justify-self-center md:w-4/5 md:block lg:w-full"
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

const Work = () => (
  <section
    className="bg-grayish dark:bg-prettyDark w-full py-12 md:py-16 px-5"
    id="work"
  >
    <div className="w-full max-w-[710px] m-auto flex flex-col gap-8 lg:gap-12">
      <h2 className="text-3xl font-serif text-black dark:text-white">
        Some of my favorite work
      </h2>
      <article className="flex flex-col gap-3">
        <Logo name="reviewed" className="w-[238px] max-w-full" />
        <p className="text-base text-black dark:text-white">
          Reviewed, as part of the USA TODAY network, was growing rapidly and
          their team needed a single place for users to sign up for an expanding
          list of email newsletters. Design and engineering to the rescue!
        </p>
        <CaseStudyLink href="/work/reviewed" />
      </article>
      <article className="flex flex-col gap-3">
        <Logo name="webflow" className="w-[182px] max-w-full" />
        <p className="text-base text-black dark:text-white">
          Webflow is incredibly flexible; a user can shape their database in
          almost any fashion imaginable. Unfortunately, as the team at ZEAL was
          making changes to its Webflow site, all of its blog meta descriptions
          disappeared! ChatGPT, meet Webflow.
        </p>
        <CaseStudyLink href="/work/webflow" />
      </article>
    </div>
  </section>
);

const CaseStudyLink = ({ href }: CaseStudyProps) => (
  <a
    href={href}
    target="_blank"
    className="text-blooper dark:text-purps uppercase tracking-wider font-bold flex items center gap-2"
  >
    View Case Study
    <Icon name="arrowright" fill="#0B2ACC" className="w-6" />
  </a>
);
