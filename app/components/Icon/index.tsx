import { IconProps } from "~/types";

import { ArrowRight } from "~icon/ArrowRight";
import { Close } from "~icon/Close";
import { File } from "~icon/File";
import { GitHub } from "~icon/GitHub";
import { LinkedIn } from "~icon/LinkedIn";
import { Moon } from "~icon/Moon";
import { Sandwich } from "./Sandwich";
import { Sun } from "~icon/Sun";
import { YouTube } from "~icon/YouTube";

const Icon = (props: IconProps) => {
  const { name } = props;
  switch (name.toLowerCase()) {
    case "arrowright":
      return <ArrowRight {...props} />;
    case "close":
      return <Close {...props} />;
    case "file":
      return <File {...props} />;
    case "github":
      return <GitHub {...props} />;
    case "linkedin":
      return <LinkedIn {...props} />;
    case "moon":
      return <Moon {...props} />;
    case "sandwich":
      return <Sandwich {...props} />;
    case "sun":
      return <Sun {...props} />;
    case "youtube":
      return <YouTube {...props} />;
  }
};

export { Icon };
