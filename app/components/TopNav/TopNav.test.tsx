import { render, screen, fireEvent } from "@testing-library/react";
import TopNav from "./TopNav";

describe("TopNav", () => {
  beforeAll(() => {
    return Object.defineProperty(window, "matchMedia", {
      value: jest.fn().mockImplementation(() => ({
        matches: false,
      })),
    });
  });

  afterEach(() => {
    document.documentElement.classList.remove("dark");
    localStorage.removeItem("theme");
  });

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

  it("toggles on dark mode", () => {
    render(<TopNav />);

    const modeToggle = screen.getByRole("button", {
      name: "color-mode-toggle",
    });

    fireEvent.click(modeToggle);

    const documentElement = document.documentElement;

    expect(documentElement).toHaveClass("dark");
  });

  it("toggles on light mode", () => {
    localStorage.theme = "dark";

    render(<TopNav />);

    const modeToggle = screen.getByRole("button", {
      name: "color-mode-toggle",
    });

    fireEvent.click(modeToggle);

    const documentElement = document.documentElement;

    expect(documentElement).not.toHaveClass("dark");
  });
});
