/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";

import { getAllArticlesByCategory } from "~/(blog)/sanity-actions";
import PageHeader from "~components/PageHeader";

export const metadata: Metadata = {
  title: "Sunjay Armstead | Creat-Moteo",
  description:
    "Creat-Moteo was an experiment started in the summer of 2016 that finished in early 2020.",
};

export default async function Article() {
  const articles = await getAllArticlesByCategory("Creat-Moteo");

  return (
    <>
      <PageHeader title="The Creat-Moteo Archive" subtitle="" />
      <section className="mx-auto max-w-innerContainer py-16 px-5 md:px-10 lg:px-0">
        <p className="leading-body text-base text-black dark:text-white mb-8">
          Creat-Moteo was&nbsp;
          <a
            href="/creatmoteo/what-is-creat-moteo"
            className="text-blooper dark:text-purps underline"
          >
            an experiment started in the summer of 2016
          </a>
          &nbsp;that finished in early 2020. It was the name of the blog for
          this site and its purpose was to inspire creative disciples. The
          entire article archive is below, so pick and choose as you like!
        </p>
        <section className="grid md:grid-cols-2 gap-12 md:gap-6">
          {articles.map(
            (article: {
              imageUrl: string;
              imageAlt: string;
              slug: string;
              title: string;
              metaDescription: string;
            }) => {
              return (
                <article
                  key={article.title}
                  className="bg-white dark:bg-prettyDark"
                >
                  <img src={article.imageUrl} alt={article.imageAlt} />
                  <div className="p-4 flex flex-col justify-between">
                    <a href={`/creatmoteo/${article.slug}`}>
                      <h2 className="text-2xl font-serif text-black dark:text-white mb-2">
                        {article.title}
                      </h2>
                    </a>

                    <p className="leading-body text-base text-black dark:text-white mb-2">
                      {article.metaDescription}
                    </p>
                    <a
                      href={`/creatmoteo/${article.slug}`}
                      className="text-blooper dark:text-purps uppercase tracking-wider font-bold flex items center gap-2 border-b border-transparent hover:border-b hover:border-blooper dark:hover:border-purps w-fit"
                    >
                      Keep Reading
                    </a>
                  </div>
                </article>
              );
            },
          )}
        </section>
      </section>
    </>
  );
}
