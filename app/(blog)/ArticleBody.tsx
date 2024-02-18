"use client";

import { useEffect } from "react";
import { highlightAll } from "prismjs";

import processHtml from "~/(blog)/process-html-action";
import "~/prism.css";

const ArticleBody = ({ content }: { content: string }) => {
  const safeHtmlString = processHtml(content);

  useEffect(() => {
    highlightAll();
  }, [content]);

  if (!content) {
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
      dangerouslySetInnerHTML={{
        __html: safeHtmlString,
      }}
    ></article>
  );
};

export default ArticleBody;
