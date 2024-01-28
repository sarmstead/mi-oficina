import { IconProps } from "~/types";

const YouTube = ({ className, fill = "black" }: IconProps) => {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_202_224)">
        <g clipPath="url(#clip1_202_224)">
          <path
            d="M31.4089 8.8523C31.0392 7.47131 29.954 6.38606 28.573 6.01639C26.0698 5.3457 16.0385 5.3457 16.0385 5.3457C16.0385 5.3457 6.00716 5.3457 3.5066 6.01639C2.12561 6.38606 1.04036 7.47131 0.67069 8.8523C0 11.3529 0 16.5732 0 16.5732C0 16.5732 0 21.7934 0.67069 24.294C1.04036 25.675 2.12561 26.7602 3.5066 27.1299C6.00716 27.8006 16.0385 27.8006 16.0385 27.8006C16.0385 27.8006 26.0698 27.8006 28.5703 27.1299C29.9513 26.7602 31.0366 25.675 31.4062 24.294C32.0769 21.7934 32.0769 16.5732 32.0769 16.5732C32.0769 16.5732 32.0769 11.3529 31.4062 8.8523H31.4089ZM12.8302 21.3842V11.7621L21.1637 16.5732L12.8302 21.3842Z"
            fill={fill}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_202_224">
          <rect width="32" height="32" fill="white" />
        </clipPath>
        <clipPath id="clip1_202_224">
          <rect
            width="32.0769"
            height="22.4549"
            fill="white"
            transform="translate(0 5.3457)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export { YouTube };
