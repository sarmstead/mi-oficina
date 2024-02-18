"use server";

import { fileToString } from "~/utils";

const docTitle = async (title: string) => {
  const html = await fileToString("app/(blog)/filename.html");
  return html.replace("${title}", title);
};

export default docTitle;
