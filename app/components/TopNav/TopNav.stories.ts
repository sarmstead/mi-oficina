import type { Meta, StoryObj } from "@storybook/react";

import TopNaV from "./TopNav";

const meta = {
  component: TopNaV,
} satisfies Meta<typeof TopNaV>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
