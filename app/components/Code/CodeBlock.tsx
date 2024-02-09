"use client";
import { useEffect } from "react";
import hljs from "highlight.js";

import { Icon } from "~icon/index";

type CodeBlockProps = {
  code: string;
  className?: string;
  language?: string;
  fileName?: string;
};

const CodeBlock = ({
  className,
  code,
  language = "",
  fileName,
}: CodeBlockProps) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

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
        <code
          className={language && `language-${language}`}
          dangerouslySetInnerHTML={{ __html: code }}
        ></code>
      </pre>
    </>
  );
};

export default CodeBlock;
