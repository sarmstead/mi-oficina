"use client";

import { useEffect, useState } from "react";
import { highlightAll } from "prismjs";

import processHtml from "~/(blog)/process-html-action";
import "~/prism.css";

const ArticleBody = ({ content }: { content: string }) => {
  const [html, setHtml] = useState<string | undefined>();

  useEffect(() => {
    const processDocument = async () => {
      const data = await processHtml(content);
      setHtml(data);
    };

    processDocument();
  }, [content]);

  useEffect(() => {
    highlightAll();
  }, [html]);

  if (!html) {
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
        __html: html,
      }}
    ></article>
  );
};

export default ArticleBody;
