import { PropsWithChildren } from "react";

type ButtonProps = {
  backgroundType: "solid" | "clear";
  href?: string;
  target?: string;
  onClick?: () => void;
};

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { backgroundType, children, href, onClick, target } = props;
  const modifiers =
    backgroundType.toLowerCase() === "clear"
      ? "text-white dark:text-purps hover:text-blooper dark:hover:text-blooper hover:bg-white border-white dark:border-purps dark:hover:border-white"
      : "text-white hover:text-blooper bg-blooper border-blooper hover:bg-white dark:text-purps dark:bg-transparent dark:hover:text-blooper dark:border-purps dark:hover:border-white dark:hover:bg-white";
  const baseClasses =
    "flex items-center justify-center min-h-12 font-medium text-base border-2 p-3 min-w-32 w-fit tracking-wider uppercase";
  const buttonClasses = [baseClasses, modifiers].join(" ");

  if (href) {
    return (
      <a href={href} className={buttonClasses} target={target}>
        {children}
      </a>
    );
  } else if (onClick) {
    return (
      <button onClick={onClick} className={buttonClasses}>
        {children}
      </button>
    );
  }
};

export default Button;
