import { PropsWithChildren } from "react";

import InlineCode from "~components/Code/InlineCode";
import CodeBlock from "~components/Code/CodeBlock";

interface CodeProps extends PropsWithChildren {
  block?: true | false;
  className?: string;
  code?: string;
  language?: string;
  fileName?: string;
}

const Code = ({
  children,
  className,
  code = "",
  block = false,
  language,
  fileName,
}: CodeProps) => {
  if (!block) return <InlineCode>{children}</InlineCode>;

  return (
    <CodeBlock
      className={className}
      code={code}
      language={language}
      fileName={fileName}
    />
  );
};

export default Code;
