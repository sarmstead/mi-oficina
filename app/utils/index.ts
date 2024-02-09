import { readFile } from "node:fs/promises";

export const colorSwitcher = (
  theme: string,
  darkColor: string,
  lightColor: string,
) => (theme === "dark" ? darkColor : lightColor);

export const fileToString = async (path: string) => readFile(path, "utf8");
