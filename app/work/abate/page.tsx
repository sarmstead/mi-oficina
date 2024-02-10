import { Metadata } from "next";
import Image from "next/image";

import PageHeader from "~components/PageHeader";
import ViewLink from "~components/ViewLink/ViewLink";
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
    article: await fileToString("app/work/abate/code-samples/cnn-article.js"),
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
        <p className="leading-body text-base text-black dark:text-white mb-8">
          Think of the last time you checked the news online. What comes to
          mind? For me, that experience usually involves lots of popups, glitchy
          page reloads, and plenty of spammy advertisements for fake products.
          Might there be a better way? One, say, with less of the things I don’t
          want to see and more of the news I do want to see?
        </p>
        <h2 className="text-3xl font-serif text-black dark:text-white mb-2">
          The solution
        </h2>
        <p className="leading-body text-base text-black dark:text-white mb-8">
          Frustrated by my news experiences, I dreamed up a web app called
          Abate.&nbsp;
          <a
            className="text-blooper dark:text-purps underline"
            href="https://www.dictionary.com/browse/abate"
            target="_blank"
          >
            The name means
          </a>
          &nbsp;to “reduce in amount, degree, [or] intensity.” And that
          definition informs Abate’s overarching purpose: to diminish
          distracting news experiences by aggregating news in one place, free
          from anything but text. To achieve this goal, news articles are
          gathered from around the internet. That data is then stripped of its
          media, leaving only the copy and metadata related to each story.
        </p>
        <h3 className="text-2xl font-serif text-black dark:text-white mb-2">
          Making things pretty
        </h3>
        <p className="leading-body text-base text-black dark:text-white mb-2">
          Creating an app from the ground up requires quite a bit of
          heavy-lifting with design. For Abate, my design target was to shoot
          for something that very clearly expresses the simplistic personality
          of the app. I also wanted the user interface to be accessible,
          esthetically pleasing, and easy to navigate. With these objectives in
          mind, I opened my sketchbook and got to drawing!
        </p>
        <p className="leading-body text-base text-black dark:text-white mb-2">
          I sketched low-fidelity wireframes first, then found my way through
          Illustrator with brand identity ideation, and eventually created
          high-fidelity wireframes that closely resemble the user interface as
          it exists today.
        </p>
        <p className="leading-body text-base text-black dark:text-white mb-2">
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
      <section className="mx-auto max-w-innerContainer px-5 md:px-10 lg:px-0">
        <h3 className="text-2xl font-serif text-black dark:text-white mb-2">
          A look under the hood
        </h3>
        <p className="leading-body text-base text-black dark:text-white mb-2">
          To build the application itself, I chose Next.js for its baked-in
          routing, caching, and API endpoints. Most of Abate’s magic happens on
          the backend using Axios for data fetching and Cheerio for page data
          scraping.
        </p>
        <p className="leading-body text-base text-black dark:text-white mb-8">
          To curate a list of articles, for example, the frontend calls Abate’s
          API to fetch a list of articles from a news source and then parses
          through that data to display relevant information like article titles.
          For individual articles, Cheerio’s parsing power also enabled proper
          citation using the story title, author name, publication date, and
          link to the original article.
        </p>
        <p className="leading-body text-base text-black dark:text-white mb-4">
          Below is a peek behind the curtain:
        </p>
        <CodeBlock
          code={files.article}
          fileName="cnn-article.js"
          className="mb-11"
          language="javascript"
        />
        <h2 className="text-3xl font-serif text-black dark:text-white mb-2">
          A few final thoughts
        </h2>
        <p className="leading-body text-base text-black dark:text-white mb-2">
          Early in development, one of the largest hurdles I faced was figuring
          out the legal aspects of an app like Abate. For instance, does
          scraping articles from news sources amount to copyright infringement,
          even with robust citations?
        </p>
        <p className="leading-body text-base text-black dark:text-white mb-2">
          Another challenge I faced was the procurement of the article data
          itself. Some news sites have stripped down versions of their story
          repositories (such as&nbsp;
          <a
            className="text-blooper dark:text-purps underline"
            href="https://lite.cnn.com/"
            target="_blank"
          >
            CNN Lite
          </a>
          ). Nevertheless, the majority of news companies have either no public
          API, or restrict their APIs for paid users only.
        </p>
        <p className="leading-body text-base text-black dark:text-white mb-8">
          I ultimately decided not to commercialize Abate given the legal
          questions and API limitations. Regardless, as an app I now use for
          myself, I can attest that it is always refreshing to get a simplified
          news experience when I’m feeling overwhelmed by the status quo.
        </p>
        <section className="flex gap-4">
          <div className="border-r-[1px] border-r-blooper dark:border-r-purps pr-4">
            <ViewLink
              href="https://abate-news.vercel.app/"
              title="View Live Page"
            />
          </div>
          <ViewLink
            href="https://github.com/sarmstead/abate/"
            title="View GitHub Repo"
          />
        </section>
      </section>
    </>
  );
}
