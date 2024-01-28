import { LogoProps } from "~/types";
import { Abate } from "~logo/Abate";
import { Reviewed } from "~logo/Reviewed";
import { Sunjay } from "~logo/Sunjay";
import { Webflow } from "~logo/Webflow";

const Logo = (props: LogoProps) => {
  const { name } = props;
  switch (name.toLowerCase()) {
    case "abate":
      return <Abate {...props} />;
    case "reviewed":
      return <Reviewed {...props} />;
    case "sunjay":
      return <Sunjay {...props} />;
    case "webflow":
      return <Webflow {...props} />;
  }
};

export { Logo };
