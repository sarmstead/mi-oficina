import type { Metadata } from "next";

import PageHeader from "~components/PageHeader";
import { getArticleBySlug, getAllSlugs } from "~/(blog)/sanity-actions";
import ArticleBody from "~/(blog)/ArticleBody";
import { authorsAsString, generateBlogMeta, formattedBlogDate } from "~/utils";

export default async function Article({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticleBySlug(params.slug, "Creat-Moteo");
  const date = formattedBlogDate(article.publishDate);
  const authors = authorsAsString(article.authors);

  return (
    <>
      <PageHeader
        title={article.title}
        subtitle={`${authors.join(", ")} | ${date}`}
      />
      <ArticleBody content={article.body}></ArticleBody>
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
