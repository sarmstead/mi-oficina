import { Metadata } from "next";
import Image from "next/image";

import PageHeader from "~components/PageHeader";
import ViewLink from "~components/ViewLink/ViewLink";
import InlineCode from "~/components/Code/InlineCode";
import CodeBlock from "~/components/Code/CodeBlock";
import { fileToString } from "~/utils";
import fullProcess from "~assets/images/case-study-abate.png";

export const metadata: Metadata = {
  title: "Sunjay Armstead | Abate Case Study",
  description:
    "Imagine an undistracted news experience. No ads, no photos, no videos—just text. Now picture multiple text-only sources in one place. This is Abate.",
};

export default async function CaseStudyWebflow() {
  const files = {
    posts: await fileToString("app/work/webflow/code-samples/posts.csv"),
    openai: await fileToString("app/work/webflow/code-samples/generate.js"),
  };

  return (
    <>
      <PageHeader
        title="A case study: Abate"
        subtitle="Picture an undistracted news experience. No ads, no photos, no videos—just text. Now imagine if you could aggregate multiple text-only sources in one place. This is Abate."
      />
      <section className="mx-auto max-w-innerContainer py-16 px-5 md:px-10 lg:px-0">
        <h2 className="text-3xl font-serif text-black dark:text-white mb-2">
          The problem
        </h2>
        <p className="text-base text-black dark:text-white mb-8">
          Think of the last time you checked the news online. What comes to
          mind? For me, that experience usually involves lots of popups, glitchy
          page reloads, and plenty of spammy advertisements for fake products.
          Might there be a better way? One, say, with less of the things I don’t
          want to see and more of the news I do want to see?
        </p>
        <h2 className="text-3xl font-serif text-black dark:text-white mb-2">
          The solution
        </h2>
        <p className="text-base text-black dark:text-white mb-8">
          Frustrated by my news experiences, I dreamed up a web app called
          Abate. The name means to “reduce in amount, degree, [or] intensity.”
          And that definition informs Abate’s overarching purpose: to diminish
          distracting news experiences by aggregating news in one place, free
          from anything but text. To achieve this goal, news articles are
          gathered from around the internet. That data is then stripped of its
          media, leaving only the copy and metadata related to each story.
        </p>
        <h3 className="text-2xl font-serif text-black dark:text-white mb-2">
          Making things pretty
        </h3>
        <p className="text-base text-black dark:text-white mb-2">
          Creating an app from the ground up requires quite a bit of
          heavy-lifting with design. For Abate, my design target was to shoot
          for something that very clearly expresses the simplistic personality
          of the app. I also wanted the user interface to be accessible,
          esthetically pleasing, and easy to navigate. With these objectives in
          mind, I opened my sketchbook and got to drawing!
        </p>
        <p className="text-base text-black dark:text-white mb-2">
          I sketched low-fidelity wireframes first, then found my way through
          Illustrator with brand identity ideation, and eventually created
          high-fidelity wireframes that closely resemble the user interface as
          it exists today.
        </p>
        <p className="text-base text-black dark:text-white mb-2">
          I love starting design projects with sketching. As a medium, it
          presents few guidelines, endless possibilities, and allows me to be as
          messy as I’d like. In fact, I’d argue that the disorderly nature of
          sketching is what enabled me to create such a beautiful interface for
          Abate.
        </p>
      </section>
      <section className="bg-grayish dark:bg-almostDark py-16 mb-16">
        <figure className="flex gap-3 px-5 md:px-10 lg:px-0 w-full max-w-innerContainer mx-auto">
          <Image
            src={fullProcess}
            alt="Wireframe sketches and high-fidelity wireframes for the Abate app"
          />
        </figure>
      </section>
    </>
  );
}
