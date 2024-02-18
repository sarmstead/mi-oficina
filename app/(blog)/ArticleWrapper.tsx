"use client";

import { highlightAllUnder } from "prismjs";
import { useEffect, useState, useCallback } from "react";

import docTitle from "~/(blog)/code-actions";
import processHtml from "~/(blog)/process-html-action";
import ArticleBody from "~/(blog)/ArticleBody";
import "~/prism.css";

const ArticleWrapper = ({ content }: { content: string }) => {
  const [body, setBody] = useState<null | Document>(null);
  const safeHtmlString = processHtml(content);

  const handleHtml = useCallback(
    async (parser: DOMParser) => {
      const doc = parser.parseFromString(safeHtmlString, "text/html");
      await highlightAllUnder(doc);

      await doc.querySelectorAll("pre").forEach(async (node) => {
        const title = node.getAttribute("filename");
        const titleBlock = await docTitle(title as string);

        if (title) {
          await node.insertAdjacentHTML("beforebegin", titleBlock);
        }
      });

      await setBody(doc);
    },
    [safeHtmlString],
  );

  useEffect(() => {
    const parser = new DOMParser();
    handleHtml(parser);
  }, [handleHtml]);

  if (!body) {
    return (
      <div className="mx-auto max-w-innerContainer py-16 px-5 md:px-10 lg:px-0 min-h-screen">
        <p className="leading-body text-base text-black dark:text-white">
          🧪 Compiling some assets ...
        </p>
      </div>
    );
  }

  return <ArticleBody html={body} />;
};

export default ArticleWrapper;
