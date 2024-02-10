"use client";

import { useAppSelector } from "~/store/hooks";
import { Logo } from "~logo/index";
import { colorSwitcher } from "~/utils";
import ViewLink from "~components/ViewLink/ViewLink";

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
          <p className="text-base text-black dark:text-white leading-body">
            Reviewed, as part of the USA TODAY network, was growing rapidly and
            their team needed a single place for users to sign up for an
            expanding list of email newsletters. Design and engineering to the
            rescue!
          </p>
          <ViewLink
            target="_self"
            href="/work/reviewed"
            title="View Case Study"
          />
        </article>
        <article className="flex flex-col gap-3">
          <Logo
            name="webflow"
            className="w-[182px] max-w-full"
            fill={colorSwitcher(theme, "white", "black")}
          />
          <p className="text-base text-black dark:text-white leading-body">
            Webflow is incredibly flexible; a user can shape their database in
            almost any fashion imaginable. Unfortunately, as the team at ZEAL
            was making changes to its Webflow site, all of its blog meta
            descriptions disappeared! ChatGPT, meet Webflow.
          </p>
          <ViewLink
            target="_self"
            href="/work/webflow"
            title="View Case Study"
          />
        </article>
        <article className="flex flex-col gap-3">
          <Logo
            name="abate"
            className="w-[157px] max-w-full"
            fill={colorSwitcher(theme, "white", "black")}
          />
          <p className="text-base text-black dark:text-white leading-body">
            Imagine an undistracted news experience. No ads, no photos, no
            videos—just text. Now picture multiple text-only sources in one
            place. This is Abate.
          </p>
          <ViewLink target="_self" href="/work/abate" title="View Case Study" />
        </article>
      </div>
    </section>
  );
};
