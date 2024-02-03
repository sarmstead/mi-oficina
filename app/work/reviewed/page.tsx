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
    </>
  );
}
