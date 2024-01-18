import { render, screen, fireEvent } from "@testing-library/react";
import TopNav from "~components/TopNav/TopNav";

describe("<TopNav />", () => {
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

  it("toggles on dark mode", () => {
    render(<TopNav />);

    const modeToggle = screen.getByRole("button", {
      name: "color-mode-toggle",
    });

    fireEvent.click(modeToggle);

    const documentElement = document.documentElement;

    expect(documentElement).toHaveClass("dark");
    expect(modeToggle.firstChild).toHaveClass("color-mode-toggle__light");
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
    expect(modeToggle.firstChild).toHaveClass("color-mode-toggle__dark");
  });
});
