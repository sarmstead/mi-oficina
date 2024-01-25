import { IconProps } from "~/types";

const ArrowRight = ({ className, fill = "black" }: IconProps) => {
  return (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M25.7125 33.0253L23.7417 31.1003L31.4417 23.4003H7.33337V20.6503H31.4417L23.6959 12.9045L25.6667 10.9795L36.7125 22.0253L25.7125 33.0253Z"
        fill={fill}
      />
    </svg>
  );
};

export { ArrowRight };
