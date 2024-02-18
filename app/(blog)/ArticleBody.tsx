import "~/prism.css";

const ArticleBody = ({ html }: any) => {
  if (html && html.documentElement.outerHTML) {
    return (
      <article
        className="article mx-auto max-w-innerContainer py-16 px-5 md:px-10 lg:px-0"
        dangerouslySetInnerHTML={{
          __html: html.documentElement.outerHTML,
        }}
      ></article>
    );
  }

  return (
    <div className="mx-auto max-w-innerContainer py-16 px-5 md:px-10 lg:px-0 min-h-screen">
      <p className="leading-body text-base text-black dark:text-white">
        🤖 Just a moment! Wrangling some data...
      </p>
    </div>
  );
};

export default ArticleBody;
