import showdown from "showdown";
import sanitize from "sanitize-html";

import { start, end } from "./filename";

const processHtml = (markdown: string) => {
  const titledHtml = markdown.replaceAll("++>", start).replaceAll("<++", end);
  const converter = new showdown.Converter();
  const convertedHtmlString = converter.makeHtml(titledHtml);

  const allowedAttributes = {
    div: ["class"],
    pre: ["class", "tabindex"],
    code: ["class"],
    ol: ["start"],
  };

  return sanitize(convertedHtmlString, {
    allowedAttributes,
  });
};

export default processHtml;
