"use server";

import { createClient } from "@sanity/client";
import { redirect } from "next/navigation";

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: false,
  apiVersion: "2024-02-13",
});

export const getArticleBySlug = async (slug: string, category: string) => {
  const article = await client.fetch(
    `*[_type == 'journal' && '${category}' in categories[]->.name && slug.current == '${slug}']{authors[]->, publishDate, title, body, metaDescription, "featuredImage": featuredImage.asset->url}[0]`,
  );

  if (!article || article.length === 0) {
    redirect("/journal");
  }

  return article;
};

export const getAllSlugs = async (category: string) => {
  return await client.fetch(
    `*[_type == 'journal' && '${category}' in categories[]->.name]{slug}`,
  );
};

export const getAllArticlesByCategory = async (category: string) => {
  return await client.fetch(
    `*[_type == 'journal' && '${category}' in categories[]->.name]{metaDescription, publishDate, title, "slug": slug.current, "imageAlt": featuredImage.alt, "imageUrl": featuredImage.asset->url}`,
  );
};
