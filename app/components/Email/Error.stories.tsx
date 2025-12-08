import type { Meta, StoryObj } from "@storybook/nextjs";

import { Error } from "~components/Email/index";
import { emailArgs, emailArgTypes } from "~components/Email/shared-args";

const meta = {
  component: Error,
  tags: ["autodocs"],
  argTypes: emailArgTypes,
  args: {
    ...emailArgs,
    recipientEmail: "admin@example.net",
    email: "krabs@dev.int",
    errors: [
      {
        code: "too_small",
        minimum: 1,
        type: "string",
        inclusive: true,
        exact: false,
        message: "Name cannot be blank",
        path: ["name"],
      },
    ],
  },
} satisfies Meta<typeof Error>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
