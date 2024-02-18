import type { Metadata } from "next";

import PageHeader from "~components/PageHeader";
import { getArticleBySlug, getAllSlugs } from "~/(blog)/sanity-actions";
import ArticleWrapper from "~/(blog)/ArticleWrapper";
import { authorsAsString, generateBlogMeta, formattedBlogDate } from "~/utils";

export default async function Article({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticleBySlug(params.slug, "Journal");
  const date = formattedBlogDate(article.publishDate);
  const authors = authorsAsString(article.authors);

  return (
    <>
      <PageHeader
        title={article.title}
        subtitle={`${authors.join(" ")} | ${date}`}
      />
      <ArticleWrapper content={article.body}></ArticleWrapper>
    </>
  );
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs("Journal");

  return slugs.map((slug: { _type: "slug"; current: string }) => ({
    slug: slug.current,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return await generateBlogMeta(params.slug, "Journal");
}
