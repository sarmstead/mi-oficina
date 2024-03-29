import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/test";

import TopNaV from "./TopNav";

const meta = {
  component: TopNaV,
} satisfies Meta<typeof TopNaV>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const modeToggle = canvas.getAllByRole("button", {
      name: "color-mode-toggle",
    })[0];

    await userEvent.click(modeToggle);
  },
};
