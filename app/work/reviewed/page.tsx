import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sunjay Armstead | Reviewed Case Study",
  description:
    "Reviewed was growing rapidly and needed a single place for newsletter signups. I tackled this problem with intuitive design and thoughtful engineering.",
};

export default function CaseStudyReviewed() {
  return (
    <>
      <header className="min-h-[350px] bg-black dark:bg-prettyDark flex flex-col justify-center px-5 md:px-10 lg:px-0">
        <div className="w-full max-w-[954px] mx-auto flex flex-col gap-4">
          <h1 className="font-serif text-white text-4xl lg:text-5xl">
            A case study: Reviewed
          </h1>
          <p className="text-base text-white w-full max-w-[589px]">
            Reviewed is your go-to place for all things, well, reviewed. People
            go to Reviewed to get fair product comparisons backed by scientific
            research. Look no further for nana’s next smart photo frame.
          </p>
        </div>
      </header>
    </>
  );
}
