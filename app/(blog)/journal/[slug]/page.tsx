import { getArticleBySlug } from "./sanity-actions";

import PageHeader from "~components/PageHeader";

export default async function Article({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticleBySlug(params.slug, "Journal");
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

// export async function generateStaticParams() {
//   // *[_type == 'journal' && 'Journal' in categories[]->.name]{slug}
//   // getJournal();

//   return [{ slug: "boop" }];
// }
