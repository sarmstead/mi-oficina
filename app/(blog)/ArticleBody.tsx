"use client";

import { useEffect, useState } from "react";
import Prism from "prismjs";

import docTitle from "~/(blog)/code-actions";

const ArticleBody = ({ content }: { content: string }) => {
  const [body, setBody] = useState<Document | string | null>(null);

  useEffect(() => {
    const setHTML = async () => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(content, "text/html");

      await Prism.highlightAllUnder(doc);

      await doc.querySelectorAll("pre").forEach(async (node) => {
        const title = node.getAttribute("fileName");

        if (title) {
          node.insertAdjacentHTML("beforebegin", await docTitle(title));
        }
      });

      await setBody(doc.documentElement.outerHTML);
    };

    setHTML();
  }, [content]);

  if (!body) {
    return (
      <div className="mx-auto max-w-innerContainer py-16 px-5 md:px-10 lg:px-0 min-h-screen">
        <p className="leading-body text-base text-black dark:text-white">
          🤖 Just a moment! Wrangling some data...
        </p>
      </div>
    );
  }
  return (
    <article
      className="article mx-auto max-w-innerContainer py-16 px-5 md:px-10 lg:px-0"
      dangerouslySetInnerHTML={{ __html: body }}
    ></article>
  );
};

export default ArticleBody;
