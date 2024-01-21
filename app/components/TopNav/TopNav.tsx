"use client";

import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";

import { Icon } from "~icon/index";
import Logo from "~components/Logo/Logo";

type MenuLinkProps = {
  children: ReactNode;
  href: string;
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
            <MenuLink href="#about" device="desktop">
              About
            </MenuLink>
          </li>
          <li>
            <MenuLink href="#work" device="desktop">
              Work
            </MenuLink>
          </li>
          <li>
            <MenuLink href="/journal" device="desktop">
              Journal
            </MenuLink>
          </li>
          <li>
            <MenuLink href="#contact" device="desktop">
              Contact
            </MenuLink>
          </li>
          <li>
            <Link
              href="/assets/resume.pdf"
              target="_blank"
              className="font-medium tracking-wider flex items-center justify-center text-white hover:text-blooper dark:text-blooper uppercase bg-blooper dark:bg-white min-h-12 py-3 px-6 hover:bg-transparent border-2 dark:border-white dark:hover:bg-transparent dark:hover:text-white border-blooper"
            >
              Resume
            </Link>
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

const MenuLink = ({ children, href, device = "mobile" }: MenuLinkProps) => {
  const fontSize = device === "mobile" ? "text-lg" : "text-base";
  const fontColor =
    device === "mobile" ? "text-white" : "text-black dark:text-white";
  return (
    <Link
      href={href}
      className={`${fontColor} uppercase tracking-wider font-medium ${fontSize}`}
    >
      {children}
    </Link>
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
            <MenuLink href="#about">About</MenuLink>
          </li>
          <li>
            <MenuLink href="#work">Work</MenuLink>
          </li>
          <li>
            <MenuLink href="/journal">Journal</MenuLink>
          </li>
          <li>
            <MenuLink href="#contact">Contact</MenuLink>
          </li>
          <li>
            <Link
              href="/assets/resume.pdf"
              target="_blank"
              className="font-medium tracking-wider text-lg flex items-center justify-center text-blooper hover:text-white dark:text-prettyDark uppercase bg-white min-h-12 py-3 px-6 hover:bg-transparent border-2 dark:hover:bg-transparent dark:hover:text-white border-white"
            >
              Resume
            </Link>
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
