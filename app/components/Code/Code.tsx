"use client";

import { PropsWithChildren } from "react";
import hljs from "highlight.js";

import { Icon } from "~icon/index";

interface CodeProps extends PropsWithChildren {
  block?: true | false;
  className?: string;
  code?: string;
  language?: string;
  fileName?: string;
}

interface InlineCodeProps extends PropsWithChildren {
  className?: string;
}

type CodeBlockProps = {
  code: string;
  className?: string;
  language?: string;
  fileName?: string;
};

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

const InlineCode = ({ children, className }: InlineCodeProps) => {
  const baseClasses =
    "font-bold tracking-wide px-2 py-[2px] mr-[1px] bg-blue-100 dark:bg-almostDark";
  const mergedClasses = [baseClasses, className].join(" ");
  return <code className={mergedClasses}>{children}</code>;
};

const CodeBlock = ({
  className,
  code,
  language = "",
  fileName,
}: CodeBlockProps) => {
  const formattedCode =
    language.length > 0
      ? hljs.highlightAuto(code, [language])
      : hljs.highlightAuto(code);

  const baseClasses = "p-5 bg-black scrollbar-track-black";
  const borderClasses = fileName
    ? "border-t-[1px] border-purps dark:border-[1px]"
    : "dark:border-[1px] dark:border-purps";
  return (
    <>
      {fileName && (
        <div className="text-white lowercase bg-black border-purps border-x-[1px] border-t-[1px]">
          <div className="flex items-center gap-2 text-white py-3 px-5 border-purps w-fit border-r-[1px]">
            <Icon name="file" className="w-4" fill="white" />
            {fileName}
          </div>
        </div>
      )}
      <pre
        className={["hljs", baseClasses, borderClasses, className].join(" ")}
      >
        <code dangerouslySetInnerHTML={{ __html: formattedCode.value }}></code>
      </pre>
    </>
  );
};

export default Code;
