import { Metadata } from "next";
import PageHeader from "~/components/PageHeader";

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
      <figure className="mx-auto max-w-[954px] px-5 md:px-10 lg:px-0">
        <figcaption className="uppercase tracking-wider mb-4">
          <strong>Figure 1 -</strong>&nbsp;Data Flow Diagram
        </figcaption>
        <div className="w-40 border-t-black border mb-10"></div>
        <section className="flex flex-col justify-center lg:flex-row">
          <div className="flex flex-col lg:flex-row items-center gap-2 lg:mr-4">
            <div className="flex flex-col items-center gap-2">
              <p className="uppercase tracking-wider text-center">
                Content CMS
                <br />
                (Reviewed Team)
              </p>
              <div className="w-24 h-20 bg-figureGray"></div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-2 mb-2 lg:mb-0 lg:mt-14 lg:-ml-7">
              <div className="lg:rotate-90 lg:w-7 lg:flex lg:justify-center">
                <Stem />
              </div>
              <p className="uppercase tracking-wider text-center lg:w-max">
                Form Data
              </p>
              <div className="lg:-rotate-90">
                <Arrow />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-2">
            <div className="flex flex-col items-center gap-2">
              <p className="uppercase tracking-wider text-center">
                Front End
                <br />
                (User-Facing)
              </p>
              <div className="w-[358px] max-w-full h-72 bg-figureGray flex items-center justify-center">
                <div className="bg-white w-[272px] max-w-full h-[212px] flex items-center justify-center">
                  <p className="uppercase tracking-wider text-center">
                    Newsletter
                    <br />
                    (Signup Form)
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-2 lg:mt-14 lg:-mr-3">
              <div className="lg:rotate-90 lg:w-7 lg:flex lg:justify-center">
                <Stem />
              </div>
              <p className="uppercase tracking-wider text-center lg:w-max">
                User Data
              </p>
              <div className="lg:-rotate-90 lg:w-7 lg:flex lg:justify-center">
                <Arrow />
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 lg:min-h-[136px] lg:justify-end">
              <p className="uppercase tracking-wider text-center">
                Email Service
              </p>
              <div className="w-24 h-20 bg-figureGray"></div>
            </div>
          </div>
        </section>
      </figure>
    </>
  );
}

const Stem = () => (
  <svg
    width="3"
    height="28"
    viewBox="0 0 3 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1.5 0L1.5 28" stroke="black" strokeWidth="2" />
  </svg>
);

const Arrow = () => (
  <svg
    width="15"
    height="29"
    viewBox="0 0 15 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.79289 28.7071C7.18342 29.0976 7.81658 29.0976 8.20711 28.7071L14.5711 22.3431C14.9616 21.9526 14.9616 21.3195 14.5711 20.9289C14.1805 20.5384 13.5474 20.5384 13.1569 20.9289L7.5 26.5858L1.84314 20.9289C1.45262 20.5384 0.819456 20.5384 0.428931 20.9289C0.038407 21.3195 0.0384069 21.9526 0.428931 22.3431L6.79289 28.7071ZM6.5 -4.37114e-08L6.5 28L8.5 28L8.5 4.37114e-08L6.5 -4.37114e-08Z"
      fill="black"
    />
  </svg>
);
