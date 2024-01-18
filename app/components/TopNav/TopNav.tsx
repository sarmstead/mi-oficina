"use client";

import { useEffect, useState } from "react";

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
          <a>About</a>
        </li>
        <li>
          <a>Work</a>
        </li>
        <li>
          <a>Journal</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
        <li>
          <a>Resume</a>
        </li>
        <li>
          <button aria-label="color-mode-toggle" onClick={handleClick}>
            Click ME!
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
