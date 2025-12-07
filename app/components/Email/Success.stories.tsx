import type { Meta, StoryObj } from "@storybook/nextjs";

import { Success } from "~components/Email/index";
import { emailArgs, emailArgTypes } from "~components/Email/shared-args";

const meta = {
  component: Success,
  tags: ["autodocs"],
  argTypes: emailArgTypes,
  args: emailArgs,
} satisfies Meta<typeof Success>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
