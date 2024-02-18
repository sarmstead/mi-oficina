import showdown from "showdown";
import sanitize from "sanitize-html";

const processHtml = (markdown: string) => {
  const converter = new showdown.Converter();
  const convertedHtmlString = converter.makeHtml(markdown);

  const allowedAttributes = {
    pre: ["class", "tabindex", "filename", "language"],
    code: ["class"],
    ol: ["start"],
  };

  return sanitize(convertedHtmlString, {
    allowedAttributes,
  });
};

export default processHtml;
