"use client";

import { useAppSelector } from "~/store/hooks";
import { colorSwitcher } from "~/utils";
import { Icon } from "~icon/index";

type ViewLinkProps = {
  href: string;
  title: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
};

const ViewLink = ({ href, target = "_blank", title }: ViewLinkProps) => {
  const theme = useAppSelector((state) => state.theme.value);

  return (
    <a
      href={href}
      target={target}
      className="text-blooper dark:text-purps uppercase tracking-wider font-bold flex items center gap-2 border-b border-transparent hover:border-b hover:border-blooper dark:hover:border-purps w-fit"
    >
      {title}
      <Icon
        name="arrowright"
        fill={colorSwitcher(theme, "#7BA0FF", "#0B2ACC")}
        className="w-6"
      />
    </a>
  );
};

export default ViewLink;
