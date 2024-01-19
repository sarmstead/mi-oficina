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

const TopNav = () => {
  const [theme, setTheme] = useState("");
  const [mobileMenu, setMobileMenu] = useState(true);

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

  const handleClick = () => {
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

  return (
    <nav>
      <section className="flex items-center justify-between w-full p-5">
        {theme === "dark" ? <Logo fill="white" /> : <Logo />}
        <ul className="hidden lg:flex lg:items-center lg:gap-5">
          <li>
            <Link href="#" device="desktop">
              About
            </Link>
          </li>
          <li>
            <Link href="#" device="desktop">
              Work
            </Link>
          </li>
          <li>
            <Link href="#" device="desktop">
              Journal
            </Link>
          </li>
          <li>
            <Link href="#" device="desktop">
              Contact
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="font-medium tracking-wider text-lg flex items-center justify-center text-white hover:text-blooper dark:text-blooper uppercase bg-blooper dark:bg-white min-h-12 py-3 px-6 hover:bg-transparent border-2 dark:border-white dark:hover:bg-transparent dark:hover:text-white border-blooper"
            >
              Resume
            </a>
          </li>
          <li className="flex items-center justify-center -ml-2">
            <button aria-label="color-mode-toggle" onClick={handleClick}>
              {theme === "dark" ? (
                <Icon
                  name="Sun"
                  fill="white"
                  className="color-mode-toggle__light"
                />
              ) : (
                <Icon name="moon" className="color-mode-toggle__dark" />
              )}
            </button>
          </li>
        </ul>

        <section className="flex items-center gap-2 lg:hidden">
          <button aria-label="color-mode-toggle" onClick={handleClick}>
            {theme === "dark" ? (
              <Icon
                name="Sun"
                fill="white"
                className="color-mode-toggle__light"
              />
            ) : (
              <Icon name="moon" className="color-mode-toggle__dark" />
            )}
          </button>
          <button className="flex items-center">
            <span className="uppercase text-sm tracking-wider text-black dark:text-white">
              Menu
            </span>
            <Icon
              name="Sandwich"
              stroke={theme === "dark" ? "white" : "black"}
            />
          </button>
        </section>
      </section>
      {mobileMenu && (
        <ul className="lg:hidden flex flex-col items-center justify-center gap-6 bg-blooper dark:bg-prettyDark min-h-screen dark:border-t-2 dark:border-almostDark">
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Work</Link>
          </li>
          <li>
            <Link href="#">Journal</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
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

export default TopNav;
