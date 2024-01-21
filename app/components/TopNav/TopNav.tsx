"use client";

import { ReactNode, useEffect, useState } from "react";

import { Icon } from "~icon/index";
import Logo from "~components/Logo/Logo";

type LinkProps = {
  children: ReactNode;
  href: string;
  target?: string;
  device?: "mobile" | "desktop";
};

type MobileMenuProps = {
  menuOpen: boolean;
};

type ColorModeToggleProps = {
  handleThemeToggle: () => void;
  theme: string;
};

const TopNav = () => {
  const [theme, setTheme] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setTheme("light");
    }
  }, []);

  const handleThemeToggle = () => {
    switch (localStorage.theme) {
      case "light":
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
        setTheme("dark");
        return;
      case "dark":
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
        setTheme("light");
        return;
      case undefined:
        throw new Error("localStorage.theme must be set to 'dark' or 'light'");
    }
  };

  const handleMobileMenuToggle = () => {
    setMobileMenu((prevState) => !prevState);
  };

  return (
    <nav className="relative">
      <section className="flex items-center justify-between w-full p-5">
        {theme === "dark" ? <Logo fill="white" /> : <Logo />}
        <ul className="hidden lg:flex lg:items-center lg:gap-5">
          <li>
            <Link href="#about" device="desktop">
              About
            </Link>
          </li>
          <li>
            <Link href="#work" device="desktop">
              Work
            </Link>
          </li>
          <li>
            <Link href="/journal" device="desktop">
              Journal
            </Link>
          </li>
          <li>
            <Link href="#contact" device="desktop">
              Contact
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="font-medium tracking-wider flex items-center justify-center text-white hover:text-blooper dark:text-blooper uppercase bg-blooper dark:bg-white min-h-12 py-3 px-6 hover:bg-transparent border-2 dark:border-white dark:hover:bg-transparent dark:hover:text-white border-blooper"
            >
              Resume
            </a>
          </li>
          <li className="flex items-center justify-center -ml-2">
            <ColorModeToggle
              handleThemeToggle={handleThemeToggle}
              theme={theme}
            />
          </li>
        </ul>
        <section className="flex items-center gap-2 lg:hidden">
          <ColorModeToggle
            handleThemeToggle={handleThemeToggle}
            theme={theme}
          />
          <button
            className="flex items-center"
            onClick={handleMobileMenuToggle}
            aria-label="mobile-menu-toggle"
          >
            <span className="uppercase text-sm tracking-wider text-black dark:text-white">
              {mobileMenu ? "Close" : "Menu"}
            </span>
            {mobileMenu ? (
              <Icon
                name="close"
                stroke={theme === "dark" ? "white" : "black"}
                className="mobile-menu-toggle__close"
              />
            ) : (
              <Icon
                name="sandwich"
                stroke={theme === "dark" ? "white" : "black"}
                className="mobile-menu-toggle__open"
              />
            )}
          </button>
        </section>
      </section>
      <MobileMenu menuOpen={mobileMenu} />
    </nav>
  );
};

const Link = ({
  children,
  href,
  target = "",
  device = "mobile",
}: LinkProps) => {
  const fontSize = device === "mobile" ? "text-lg" : "text-base";
  const fontColor =
    device === "mobile" ? "text-white" : "text-black dark:text-white";
  return (
    <a
      href={href}
      target={target}
      className={`${fontColor} uppercase tracking-wider font-medium ${fontSize}`}
    >
      {children}
    </a>
  );
};

const MobileMenu = ({ menuOpen }: MobileMenuProps) => {
  if (!menuOpen) {
    return null;
  }

  return (
    <>
      {menuOpen && (
        <ul
          data-testid="mobile-menu"
          className="absolute top-[84px] left-0 right-0 min-h-screen lg:hidden flex flex-col items-center justify-center gap-6 bg-blooper dark:bg-prettyDark dark:border-t-2 dark:border-almostDark"
        >
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#work">Work</Link>
          </li>
          <li>
            <Link href="/journal">Journal</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
          <li>
            <a
              href="#"
              className="font-medium tracking-wider text-lg flex items-center justify-center text-blooper hover:text-white dark:text-prettyDark uppercase bg-white min-h-12 py-3 px-6 hover:bg-transparent border-2 dark:hover:bg-transparent dark:hover:text-white border-white"
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </>
  );
};

const ColorModeToggle = ({
  handleThemeToggle,
  theme,
}: ColorModeToggleProps) => (
  <button aria-label="color-mode-toggle" onClick={handleThemeToggle}>
    {theme === "dark" ? (
      <Icon name="Sun" fill="white" className="color-mode-toggle__light" />
    ) : (
      <Icon name="moon" className="color-mode-toggle__dark" />
    )}
  </button>
);

export default TopNav;
