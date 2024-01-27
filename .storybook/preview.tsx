import React from "react";
import { Preview } from "@storybook/react";
import { addons } from "@storybook/preview-api";

import { Providers } from "../app/store/providers";

import "~/globals.css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <Providers>
        <Story />
      </Providers>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "gray",
        },
        {
          name: "light",
          value: "white",
        },
      ],
    },
  },
};

const channel = addons.getChannel();

channel.on("DARK_MODE", (isDark) => {
  if (isDark) {
    document.body.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.body.classList.remove("dark");
    localStorage.theme = "light";
  }
});

export default preview;
