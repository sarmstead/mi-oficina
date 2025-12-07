import type { Meta, StoryObj } from "@storybook/nextjs";

import { Received } from "~components/Email/index";
import { emailArgs, emailArgTypes } from "~components/Email/shared-args";

const meta = {
  component: Received,
  tags: ["autodocs"],
  argTypes: emailArgTypes,
  args: emailArgs,
} satisfies Meta<typeof Received>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
