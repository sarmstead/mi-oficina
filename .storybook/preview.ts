import type { Preview } from "@storybook/react";

import "~/globals.css";

const preview: Preview = {
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

export default preview;
