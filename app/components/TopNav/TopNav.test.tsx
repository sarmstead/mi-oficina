import { render, screen, fireEvent } from "@testing-library/react";
import { within } from "@testing-library/dom";

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

    const modeToggle = screen.getAllByRole("button", {
      name: "color-mode-toggle",
    })[0];

    fireEvent.click(modeToggle);

    const documentElement = document.documentElement;

    expect(documentElement).toHaveClass("dark");
    expect(modeToggle.firstChild).toHaveClass("color-mode-toggle__light");
  });

  it("toggles on light mode", () => {
    localStorage.theme = "dark";

    render(<TopNav />);

    const modeToggle = screen.getAllByRole("button", {
      name: "color-mode-toggle",
    })[0];

    fireEvent.click(modeToggle);

    const documentElement = document.documentElement;

    expect(documentElement).not.toHaveClass("dark");
    expect(modeToggle.firstChild).toHaveClass("color-mode-toggle__dark");
  });

  it("opens mobile menu", () => {
    render(<TopNav />);

    const menuToggle = screen.getByRole("button", {
      name: "mobile-menu-toggle",
    });

    fireEvent.click(menuToggle);

    expect(screen.getByText("Close")).toBeInTheDocument();
    expect(screen.getByTestId("mobile-menu")).toBeVisible();
    expect(menuToggle.lastChild).toHaveClass("mobile-menu-toggle__close");
  });

  it("closes mobile menu", () => {
    render(<TopNav />);

    const menuToggle = screen.getByRole("button", {
      name: "mobile-menu-toggle",
    });

    fireEvent.click(menuToggle);

    const mobileMenu = screen.getByTestId("mobile-menu");
    const menuItem = within(mobileMenu).getByText("About");

    fireEvent.click(menuItem);

    expect(screen.getByText("Menu")).toBeInTheDocument();
    expect(mobileMenu).not.toBeVisible();
    expect(menuToggle.lastChild).toHaveClass("mobile-menu-toggle__open");
  });
});
