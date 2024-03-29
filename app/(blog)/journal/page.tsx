/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";

import { getAllArticlesByCategory } from "~/(blog)/sanity-actions";
import PageHeader from "~components/PageHeader";
import Button from "~/components/Button/Button";

export const metadata: Metadata = {
  title: "Sunjay Armstead | Journal",
  description:
    "If you’re like me and you can’t get enough about design and development, you’re in the right place. Let's discover the joys of being unicorns.",
};

export default async function Article() {
  const articles = await getAllArticlesByCategory("Journal");

  return (
    <>
      <PageHeader title="A Journal for Unicorns" subtitle="" />
      <section className="mx-auto max-w-innerContainer py-16 px-5 md:px-10 lg:px-0">
        <p className="leading-body text-base text-black dark:text-white mb-8">
          Are unicorns real? Of course they are! Unicorns are designers who
          can’t stop thinking about engineering, and developers who can’t stop
          thinking about design. If you’re like me and you can’t get enough
          about design and development, you’re in the right place.
        </p>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-6">
          {articles.map(
            (article: {
              _id: string;
              imageUrl: string;
              imageAlt: string;
              slug: string;
              title: string;
              metaDescription: string;
            }) => {
              return (
                <article
                  key={article._id}
                  className="bg-white dark:bg-prettyDark"
                >
                  <img src={article.imageUrl} alt={article.imageAlt} />
                  <div className="p-4 flex flex-col justify-between md:min-h-64">
                    <a href={`/journal/${article.slug}`}>
                      <h2 className="text-2xl font-serif text-black dark:text-white mb-2">
                        {article.title}
                      </h2>
                    </a>

                    <p className="leading-body text-base text-black dark:text-white mb-2">
                      {article.metaDescription}
                    </p>
                    <a
                      href={`/journal/${article.slug}`}
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
        <section className="py-20 flex flex-col gap-4 justify-center px-5 md:px-10 lg:px-0 mt-16 bg-grayish dark:bg-prettyDark">
          <h2 className="text-center text-3xl font-serif text-black dark:text-white">
            Looking for Creat-Moteo?
          </h2>
          <p className="text-base text-black text-center dark:text-white leading-body">
            Read the blogs by Creat-Moteo on creative discipleship.
          </p>
          <div className="flex justify-center">
            <Button backgroundType="solid" href="/creatmoteo">
              Start Reading
            </Button>
          </div>
        </section>
      </section>
    </>
  );
}
