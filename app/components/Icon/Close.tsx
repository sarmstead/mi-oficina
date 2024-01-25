import { IconProps } from "~icon/iconProps";

const Close = ({ className, stroke = "black" }: IconProps) => {
  return (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M13.5146 30.5L30.4852 13.5294" stroke={stroke} strokeWidth="2" />
      <path d="M13.5146 13.5L30.4852 30.4706" stroke={stroke} strokeWidth="2" />
    </svg>
  );
};

export { Close };
