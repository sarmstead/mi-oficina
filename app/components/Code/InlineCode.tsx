import { PropsWithChildren } from "react";

interface InlineCodeProps extends PropsWithChildren {
  className?: string;
}

const InlineCode = ({ children, className }: InlineCodeProps) => {
  const baseClasses =
    "font-bold tracking-wide px-2 py-[2px] mr-[1px] bg-blue-100 dark:bg-almostDark";
  const mergedClasses = [baseClasses, className].join(" ");
  return <code className={mergedClasses}>{children}</code>;
};

export default InlineCode;
