"use client";

import { ReactNode, useEffect, useState } from "react";

import { Icon } from "~icon/index";

type LinkProps = {
  children: ReactNode;
  href: string;
  target?: string;
};

const TopNav = () => {
  const [theme, setTheme] = useState("");

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
    <nav className="flex justify-between">
      <ul className="flex items-center gap-5">
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
            className="flex items-center justify-center text-white hover:text-blooper dark:text-blooper uppercase min-w-[116px] bg-blooper dark:bg-white min-h-12 p-3 hover:bg-transparent border-2 dark:border-white dark:hover:bg-transparent dark:hover:text-white border-blooper"
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
    </nav>
  );
};

const Link = ({ children, href, target = "" }: LinkProps) => (
  <a
    href={href}
    target={target}
    className="text-black dark:text-white uppercase tracking-wider"
  >
    {children}
  </a>
);

export default TopNav;
