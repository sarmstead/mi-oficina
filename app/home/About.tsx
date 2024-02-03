import Image from "next/image";

import Button from "~components/Button/Button";
import rectangleHeadshot from "~assets/images/headshot--rectangle.jpg";
import circleHeadshot from "~assets/images/headshot--circle.png";

export const About = () => (
  <section
    id="about"
    className="px-5 md:px-10 lg:px-0 py-12 grid gap-6 md:py-16 md:items-center md:grid-cols-[293px_1fr] max-w-[954px]"
  >
    <Image
      src={rectangleHeadshot}
      alt="Sunjay Armstead smiling big in a jade green collared shirt"
      className="block w-full md:hidden"
      priority={true}
    />
    <Image
      src={circleHeadshot}
      alt="Sunjay Armstead smiling big in a jade green collared shirt"
      className="hidden justify-self-center md:w-4/5 md:block lg:w-full"
      priority={true}
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
