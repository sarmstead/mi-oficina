import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/nextjs";
import path, { dirname } from "path";
import webpack from "webpack";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
  stories: ["../app/**/*.mdx", "../app/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-docs"],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  webpackFinal: async (config) => {
    if (config.externals) {
      config.externals["node:fs"] = "commonjs node:fs";
    }

    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "~": path.resolve(__dirname, "../app"),
        "~components": path.resolve(__dirname, "../app/components"),
        "~icon": path.resolve(__dirname, "../app/components/Icon"),
        "~logo": path.resolve(__dirname, "../app/components/Logo"),
        "~assets": path.resolve(__dirname, "../public/assets"),
      };

      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    if (config.plugins) {
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(/^node:/, (resource) => {
          resource.request = resource.request.replace(/^node:/, "");
        }),
      );
    }
    return config;
  },
};

export default config;
