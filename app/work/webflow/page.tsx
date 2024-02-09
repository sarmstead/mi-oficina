import { Metadata } from "next";

import PageHeader from "~components/PageHeader";
import ViewLink from "~components/ViewLink/ViewLink";
import Code from "~/components/Code/Code";
import { fileToString } from "~/utils";

export const metadata: Metadata = {
  title: "Sunjay Armstead | Webflow AI Case Study",
  description:
    "Meta descriptions? Yikes. Let’s have AI write those for us, shall we?",
};

export default async function CaseStudyWebflow() {
  const files = {
    posts: await fileToString("app/work/webflow/code-samples/posts.csv"),
    openai: await fileToString("app/work/webflow/code-samples/generate.js"),
  };

  return (
    <>
      <PageHeader
        title="A case study: Webflow GPT"
        subtitle="Meta descriptions? Yikes. Let’s have AI write those for us, shall we?"
      />
      <section className="mx-auto max-w-innerContainer pt-16 px-5 md:px-10 lg:px-0">
        <h2 className="text-3xl font-serif text-black dark:text-white mb-2">
          The problem
        </h2>
        <p className="text-base text-black dark:text-white mb-8">
          The wonderful thing about Webflow is its incredible flexibility; a
          user can shape their database in almost any fashion imaginable.
          Unfortunately, as the team at ZEAL was making changes to its Webflow
          site, all of its blog meta descriptions disappeared! ChatGPT, meet
          Webflow.
        </p>
        <h2 className="text-3xl font-serif text-black dark:text-white mb-2">
          The solution
        </h2>
        <p className="text-base text-black dark:text-white mb-2">
          Bad things happen to good people and, yes, this is a fine example. At
          the time, ZEAL’s blog collection exceeded 100 articles. We could
          create new descriptions manually, reading through each blog and coming
          up with our most creative summaries. That, of course, would be a long
          process and we would forfeit the opportunity to help other teams
          facing similar predicaments.
        </p>
        <p className="text-base text-black dark:text-white">
          To solve our problem, I created a JavaScript program with four core
          functions:
        </p>
        <ol className="list-inside list-decimal ml-6 mb-8 text-base text-black dark:text-white">
          <li>Fetch each article</li>
          <li>
            Request OpenAI to generate a meta description based on the article
            data
          </li>
          <li>
            Post each new description to its corresponding article in Webflow
          </li>
          <li>Generate a report of the work completed</li>
        </ol>
        <h3 className="text-2xl font-serif text-black dark:text-white mb-2">
          Fetching and sending articles
        </h3>
        <p className="text-base text-black dark:text-white mb-8">
          Altogether, the four core functions of this program require a great
          deal of asynchronous processes that are likely to get tangled with one
          another. For this reason, I instantiated a lightweight SQLite database
          to persist key data points that I could revisit after each step
          terminates. For example, for every article fetched from Webflow, the
          program stores its data in a posts table. Once that process completes,
          each article’s post_body is then sent to OpenAI to process.
        </p>
        <h3 className="text-2xl font-serif text-black dark:text-white mb-2">
          Generating descriptions
        </h3>
        <p className="text-base text-black dark:text-white mb-2">
          The payload sent to OpenAI contains the&nbsp;
          <Code>model</Code>,&nbsp;<Code>prompt</Code>,&nbsp;
          <Code>temperature</Code>, and&nbsp;<Code>max_tokens</Code>. The model
          for this program is&nbsp;<Code>text-davinci-003</Code>, a GPT-3.5
          model that generates well for most tasks. The&nbsp;<Code>prompt</Code>
          &nbsp;asks OpenAI to read a specific blog post and generate a meta
          description with up to 150 characters. The&nbsp;
          <Code>temperature</Code>&nbsp;handles output variability, which in
          this case is set to a low value. Finally,&nbsp;
          <Code>max_tokens</Code>
          &nbsp;is set to&nbsp;<Code>200</Code>&nbsp;to ensure that the
          generated description has at least 150 characters.
        </p>
        <p className="text-base text-black dark:text-white mb-4">
          Altogether, the payload sent to OpenAI looks like this:
        </p>
        <Code
          block={true}
          code={files.openai}
          fileName="generate.js"
          className="mb-11"
        />
        <h3 className="text-2xl font-serif text-black dark:text-white mb-2">
          Results and limitations
        </h3>
        <p className="text-base text-black dark:text-white mb-4">
          The response from OpenAI is stored in the SQLite database and posted
          to Webflow. A comprehensive report of the work completed is then
          generated with time stamps, post IDs, and new descriptions. Below is a
          snippet of what reports include:
        </p>
        <Code
          block={true}
          code={files.posts}
          language="text"
          fileName="posts.csv"
          className="mb-4"
        />
        <p className="text-base text-black dark:text-white mb-2">
          One limitation of the&nbsp;<Code>davinci-003</Code>&nbsp;model is that
          it is not good at following character limits for generated text.
          Often, the new description would exceed the 150 character
          specification set in the prompt. One way around this is to send
          multiple requests to OpenAI for each article and choose the response
          with the least number of characters.
        </p>
        <p className="text-base text-black dark:text-white mb-2">
          Another limitation is Webflow’s API throttle limits, which can quickly
          corrupt data sets. I overcame this issue by creating a wait function
          that returns a Promise based on a specified setTimeout function.
        </p>
        <p className="text-base text-black dark:text-white mb-8">
          Although the program did yield favorable results, with some
          limitations, Agile iterations are a logical next step toward improving
          the application. I can write new user stories for additional use cases
          and refactor along the way to ensure that the codebase is ready for
          future changes,
        </p>
        <ViewLink
          href="https://github.com/CodingZeal/webflow-gpt"
          title="View GitHub Repo"
        />
      </section>
    </>
  );
}
