import { readFile } from "node:fs/promises";

import { getArticleBySlug } from "~/(blog)/sanity-actions";

type Author = {
  firstName: string;
  lastName: string;
};

export const colorSwitcher = (
  theme: string,
  darkColor: string,
  lightColor: string,
) => (theme === "dark" ? darkColor : lightColor);

export const fileToString = async (path: string) => readFile(path, "utf8");

export const generateBlogMeta = async (slug: string, category: string) => {
  const meta = await getArticleBySlug(slug, category);

  return {
    title: `${meta.title} | ${meta.authors.map((name: { firstName: string; lastName: string }) => `${name.firstName} ${name.lastName}`).join(", ")}`,
    description: meta.metaDescription,
    openGraph: {
      images: { url: meta.featuredImage },
    },
    authors: meta.authors.map(
      (author: { firstName: string; lastName: string }) => ({
        name: `${author.firstName} ${author.lastName}`,
      }),
    ),
  };
};

export const formattedBlogDate = (date: string | number | Date) => {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export const authorsAsString = (authors: Author[]) => {
  return authors.map((author: Author) => {
    return `${author.firstName} ${author.lastName}`;
  });
};
