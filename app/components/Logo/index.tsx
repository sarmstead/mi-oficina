import { LogoProps } from "~/types";
import { Sunjay } from "~logo/Sunjay";

const Logo = (props: LogoProps) => {
  const { name } = props;
  switch (name.toLowerCase()) {
    case "sunjay":
      return <Sunjay {...props} />;
  }
};

export { Logo };
