import { IconProps } from "~icon/iconProps";

const ArrowRight = ({ className, fill = "black" }: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14.025 18.067L12.95 17.017L17.15 12.817H4V11.317H17.15L12.925 7.09199L14 6.04199L20.025 12.067L14.025 18.067Z"
        fill={fill}
      />
    </svg>
  );
};

export { ArrowRight };
