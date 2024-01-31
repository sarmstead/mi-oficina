import type { Meta, StoryObj } from "@storybook/react";

import { Received } from "~components/Email/index";

const meta = {
  component: Received,
  tags: ["autodocs"],
  argTypes: {
    firstName: {
      control: "text",
      description: "First name of recipient",
    },
  },
  args: {
    firstName: "Amy",
  },
} satisfies Meta<typeof Received>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
