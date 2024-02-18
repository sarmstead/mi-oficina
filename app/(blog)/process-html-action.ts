import showdown from "showdown";
import sanitize from "sanitize-html";

import { start, end } from "./filename";

const processHtml = async (markdown: string) => {
  const titledHtml = await markdown
    .replaceAll("++>", start)
    .replaceAll("<++", end);
  const converter = new showdown.Converter();
  const convertedHtmlString = await converter.makeHtml(titledHtml);

  const allowedAttributes = {
    div: ["class"],
    pre: ["class", "tabindex"],
    code: ["class"],
    ol: ["start"],
    iframe: ["src", "allow", "allowfullscreen", "loading", "title"],
  };

  return sanitize(convertedHtmlString, {
    allowedTags: sanitize.defaults.allowedTags.concat(["iframe"]),
    allowedAttributes,
    allowedIframeHostnames: ["www.youtube.com"],
  });
};

export default processHtml;
