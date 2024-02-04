import { Metadata } from "next";

import PageHeader from "~components/PageHeader";
import Figure from "~/work/reviewed/Figure";

export const metadata: Metadata = {
  title: "Sunjay Armstead | Reviewed Case Study",
  description:
    "Reviewed was growing rapidly and needed a single place for newsletter signups. I tackled this problem with intuitive design and thoughtful engineering.",
};

export default function CaseStudyReviewed() {
  return (
    <>
      <PageHeader
        title="A case study: Reviewed"
        subtitle="Reviewed is your go-to place for all things, well, reviewed. People
            go to Reviewed to get fair product comparisons backed by scientific
            research. Look no further for nana’s next smart photo frame."
      />
      <section className="mx-auto max-w-[954px] py-16 px-5 md:px-10 lg:px-0">
        <h2 className="text-3xl font-serif text-black dark:text-white mb-2">
          The problem
        </h2>
        <p className="text-base text-black dark:text-white mb-8">
          Reviewed, as part of the USA TODAY network, was growing rapidly and
          their team needed a single place for users to sign up for an expanding
          list of email newsletters.
        </p>
        <h2 className="text-3xl font-serif text-black dark:text-white mb-2">
          The solution
        </h2>
        <p className="text-base text-black dark:text-white mb-2">
          There are several factors to consider when addressing a problem like
          Reviewed was facing. First up, who are the users we’re solving for? In
          this case, Reviewed needed a solution that delighted their customers
          and would be easy for their team to manage. That’s two primary user
          groups.
        </p>
        <p className="text-base text-black dark:text-white mb-2">
          Next, it’s important to consider the unique needs of each user.
          Customers need a simple way to enter in their contact information and
          select the newsletters they want to subscribe to. However, Reviewed’s
          administrative team was less concerned about a streamlined newsletter
          signup process. Instead, they needed a simple way to manage their
          subscriptions and add new newsletter options in the future.
        </p>
        <p className="text-base text-black dark:text-white">
          Finally, any addition to an existing user interface should match
          established design patterns. At the same time, it is my job as a
          designer to push the envelope. In this way, my aim for Reviewed was to
          achieve an appropriate balance of innovation and continuity.
        </p>
      </section>
      <Figure />
      <section className="mx-auto max-w-[954px] pb-16 px-5 md:px-10 lg:px-0">
        <h2 className="text-2xl font-serif text-black dark:text-white mb-2">
          Design
        </h2>
        <p className="text-base text-black dark:text-white mb-2">
          My first design task was to brainstorm several ideas for the
          user-facing components. After a few sketches and several drafts, I
          enhanced my design with important form states (first visit, errors,
          etc.), multiple screen sizes, and ensured that the final design was
          cohesive with Reviewed’s design system.
        </p>
      </section>
    </>
  );
}
