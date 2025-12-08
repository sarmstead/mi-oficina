import type { Meta, StoryObj } from "@storybook/nextjs";

import SuccessMessage from "~components/SuccessMessage/SuccessMessage";

const meta = {
  component: SuccessMessage,
  tags: ["autodocs"],
} satisfies Meta<typeof SuccessMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
