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
    <nav>
      <ul>
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
          <Link href="#">Resume</Link>
        </li>
        <li className="flex items-center justify-center">
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
  <a href={href} target={target} className="text-black dark:text-white">
    {children}
  </a>
);

export default TopNav;
