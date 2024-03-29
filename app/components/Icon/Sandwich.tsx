import { IconProps } from "~/types";

const Sandwich = ({ className, stroke = "black" }: IconProps) => {
  return (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M10 17H34" stroke={stroke} strokeWidth="2" />
      <path d="M10 27H34" stroke={stroke} strokeWidth="2" />
    </svg>
  );
};

export { Sandwich };
