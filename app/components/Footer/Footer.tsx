"use client";

import { useAppSelector } from "~/store/hooks";
import { colorSwitcher } from "~/utils";
import { Icon } from "~icon/index";

const Footer = () => {
  const theme = useAppSelector((state) => state.theme.value);
  const thisYear = new Date().getFullYear().toString();

  return (
    <footer className="flex max-w-[1194px] m-auto py-8 px-5 flex-col gap-3 md:flex-row md:gap-0 items-center md:justify-between">
      <small className="text-black dark:text-white uppercase text-base tracking-wider font-medium">
        Copyright © {thisYear} Sunjay Armstead
      </small>
      <div className="flex gap-5">
        <a
          href="https://www.linkedin.com/in/sunjayarmstead/"
          target="_blank"
          title="LinkedIn"
        >
          <Icon
            name="linkedin"
            className="w-8"
            fill={colorSwitcher(theme, "white", "black")}
          />
        </a>
        <a href="https://github.com/sarmstead/" target="_blank" title="GitHub">
          <Icon
            name="github"
            className="w-8"
            fill={colorSwitcher(theme, "white", "black")}
          />
        </a>
        <a
          href="https://www.youtube.com/@sunjayarmstead/"
          target="_blank"
          title="YouTube"
        >
          <Icon
            name="youtube"
            className="w-8"
            fill={colorSwitcher(theme, "white", "black")}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
