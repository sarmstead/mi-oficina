import type { Metadata } from "next";

import { getArticleBySlug, getAllSlugs } from "~/(blog)/sanity-actions";
import PageHeader from "~components/PageHeader";
import { generateBlogMeta } from "~/utils";

export default async function Article({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticleBySlug(params.slug, "Creat-Moteo");
  const date = new Date(article.publishDate).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const authors = article.authors.map(
    (author: { firstName: string; lastName: string }) => {
      return `${author.firstName} ${author.lastName}`;
    },
  );
  const title = article.title;

  return (
    <>
      <PageHeader title={title} subtitle={`${authors.join(" ")} | ${date}`} />
      <article
        className="article mx-auto max-w-innerContainer py-16 px-5 md:px-10 lg:px-0"
        dangerouslySetInnerHTML={{ __html: article.body }}
      ></article>
    </>
  );
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs("Creat-Moteo");

  return slugs.map((slug: { _type: "slug"; current: string }) => ({
    slug: slug.current,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return await generateBlogMeta(params.slug, "Creat-Moteo");
}
