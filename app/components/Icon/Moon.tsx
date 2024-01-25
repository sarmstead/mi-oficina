import { IconProps } from "~icon/iconProps";

const Moon = ({ className, fill = "black" }: IconProps) => {
  return (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M22.1561 32C19.3784 32 17.0172 31.0278 15.0728 29.0833C13.1284 27.1389 12.1561 24.7778 12.1561 22C12.1561 19.2222 13.1284 16.8611 15.0728 14.9167C17.0172 12.9722 19.3784 12 22.1561 12C22.3043 12 22.4617 12.0046 22.6284 12.0139C22.795 12.0231 23.008 12.037 23.2672 12.0556C22.6006 12.6481 22.0821 13.3796 21.7117 14.25C21.3413 15.1204 21.1561 16.037 21.1561 17C21.1561 18.6667 21.7395 20.0833 22.9061 21.25C24.0728 22.4167 25.4895 23 27.1561 23C28.1191 23 29.0358 22.8287 29.9061 22.4861C30.7765 22.1435 31.508 21.6667 32.1006 21.0556C32.1191 21.2778 32.133 21.4583 32.1422 21.5972C32.1515 21.7361 32.1561 21.8704 32.1561 22C32.1561 24.7778 31.1839 27.1389 29.2395 29.0833C27.295 31.0278 24.9339 32 22.1561 32ZM22.1561 30.3333C24.1746 30.3333 25.9339 29.7083 27.4339 28.4583C28.9339 27.2083 29.8691 25.7407 30.2395 24.0556C29.7765 24.2593 29.2811 24.412 28.7534 24.5139C28.2256 24.6157 27.6932 24.6667 27.1561 24.6667C25.0265 24.6667 23.2163 23.9213 21.7256 22.4306C20.2348 20.9398 19.4895 19.1296 19.4895 17C19.4895 16.5556 19.5358 16.0787 19.6284 15.5694C19.7209 15.0602 19.8876 14.4815 20.1284 13.8333C18.3135 14.3333 16.8089 15.3472 15.6145 16.875C14.42 18.4028 13.8228 20.1111 13.8228 22C13.8228 24.3148 14.633 26.2824 16.2534 27.9028C17.8737 29.5231 19.8413 30.3333 22.1561 30.3333Z"
        fill={fill}
      />
    </svg>
  );
};

export { Moon };
