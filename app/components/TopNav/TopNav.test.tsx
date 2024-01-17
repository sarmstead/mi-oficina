import { render, screen } from "@testing-library/react";
import TopNav from "./TopNav";

describe("TopNav", () => {
  it("renders navigation links", () => {
    render(<TopNav />);

    const aboutNode = screen.getByText(/about/i);
    const workNode = screen.getByText(/work/i);
    const journalNode = screen.getByText(/journal/i);
    const contactNode = screen.getByText(/contact/i);
    const resumeNode = screen.getByText(/resume/i);

    expect(aboutNode).toBeInTheDocument();
    expect(workNode).toBeInTheDocument();
    expect(journalNode).toBeInTheDocument();
    expect(contactNode).toBeInTheDocument();
    expect(resumeNode).toBeInTheDocument();
  });
});
