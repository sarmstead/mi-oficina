import { PropsWithChildren } from "react";

type ButtonProps = {
  backgroundType: "solid" | "clear";
  href?: string;
  target?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
};

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { backgroundType, children, href, onClick, target, type } = props;
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
  } else if (onClick && !type) {
    return (
      <button type="button" onClick={onClick} className={buttonClasses}>
        {children}
      </button>
    );
  } else if (type && !onClick) {
    return (
      <button type={type} className={buttonClasses}>
        {children}
      </button>
    );
  }
};

export default Button;
