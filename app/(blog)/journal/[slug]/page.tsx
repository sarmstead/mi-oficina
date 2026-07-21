import type { Metadata } from "next";

import PageHeader from "~components/PageHeader";
import { getArticleBySlug, getAllSlugs } from "~/(blog)/sanity-actions";
import ArticleBody from "~/(blog)/ArticleBody";
import { authorsAsString, formattedBlogDate } from "~/utils";
import { generateBlogMeta } from "~/utils/server";

export default async function Article(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const article = await getArticleBySlug(params.slug, "Journal");
  const date = formattedBlogDate(article.publishDate);
  const authors = authorsAsString(article.authors);

  return (
    <>
      <PageHeader
        title={article.title}
        subtitle={`${authors.join(" ")} | ${date}`}
      />
      <ArticleBody content={article.body}></ArticleBody>
    </>
  );
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs("Journal");

  return slugs.map((slug: { _type: "slug"; current: string }) => ({
    "(slug)": slug.current,
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  return await generateBlogMeta(params.slug, "Journal");
}
