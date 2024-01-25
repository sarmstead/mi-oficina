"use client";

import { useAppSelector } from "~/store/hooks";
import { Icon } from "~icon/index";
import { Logo } from "~logo/index";
import { colorSwitcher } from "~/utils";

type CaseStudyProps = {
  href: string;
  theme: string;
};

export const Work = () => {
  const theme = useAppSelector((state) => state.theme.value);

  return (
    <section
      className="bg-grayish dark:bg-prettyDark w-full py-12 md:py-16 px-5"
      id="work"
    >
      <div className="w-full max-w-[710px] m-auto flex flex-col gap-8 lg:gap-12">
        <h2 className="text-3xl font-serif text-black dark:text-white">
          Some of my favorite work
        </h2>
        <article className="flex flex-col gap-3">
          <Logo
            name="reviewed"
            className="w-[238px] max-w-full"
            fill={colorSwitcher(theme, "white", "black")}
          />
          <p className="text-base text-black dark:text-white">
            Reviewed, as part of the USA TODAY network, was growing rapidly and
            their team needed a single place for users to sign up for an
            expanding list of email newsletters. Design and engineering to the
            rescue!
          </p>
          <CaseStudyLink href="/work/reviewed" theme={theme} />
        </article>
        <article className="flex flex-col gap-3">
          <Logo
            name="webflow"
            className="w-[182px] max-w-full"
            fill={colorSwitcher(theme, "white", "black")}
          />
          <p className="text-base text-black dark:text-white">
            Webflow is incredibly flexible; a user can shape their database in
            almost any fashion imaginable. Unfortunately, as the team at ZEAL
            was making changes to its Webflow site, all of its blog meta
            descriptions disappeared! ChatGPT, meet Webflow.
          </p>
          <CaseStudyLink href="/work/webflow" theme={theme} />
        </article>
      </div>
    </section>
  );
};

const CaseStudyLink = ({ href, theme }: CaseStudyProps) => (
  <a
    href={href}
    target="_blank"
    className="text-blooper dark:text-purps uppercase tracking-wider font-bold flex items center gap-2"
  >
    View Case Study
    <Icon
      name="arrowright"
      fill={colorSwitcher(theme, "#7BA0FF", "#0B2ACC")}
      className="w-6"
    />
  </a>
);
