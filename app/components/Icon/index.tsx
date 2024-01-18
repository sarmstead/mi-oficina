import { IconProps } from "~icon/iconProps";
import { Moon } from "~icon/Moon";
import { Sun } from "~icon/Sun";

const Icon = (props: IconProps) => {
  const { name } = props;
  switch (name.toLowerCase()) {
    case "moon":
      return <Moon {...props} />;
    case "sun":
      return <Sun {...props} />;
  }
};

export { Icon };
