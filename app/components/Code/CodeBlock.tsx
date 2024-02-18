"use client";

import { useEffect } from "react";
import Prism from "prismjs";

import { Icon } from "~icon/index";
import "~/prism.css";

type CodeBlockProps = {
  code: string;
  className?: string;
  language?: string;
  fileName?: string;
};

const CodeBlock = ({ className, code, language, fileName }: CodeBlockProps) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const baseClasses = "p-5 bg-black";
  const borderClasses = "border-[1px] border-purps";

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
        className={[
          language && `language-${language}`,
          baseClasses,
          borderClasses,
          className,
        ].join(" ")}
      >
        <code
          dangerouslySetInnerHTML={{
            __html: code,
          }}
        ></code>
      </pre>
    </>
  );
};

export default CodeBlock;
