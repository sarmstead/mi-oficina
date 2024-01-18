import type { Meta, StoryObj } from "@storybook/react";

import TopNaV from "./TopNav";

const meta = {
  title: "Components/TopNav",
  component: TopNaV,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
} satisfies Meta<typeof TopNaV>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
