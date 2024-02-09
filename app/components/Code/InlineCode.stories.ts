import type { Meta, StoryObj } from "@storybook/react";

import InlineCode from "~/components/Code/InlineCode";

const meta = {
  component: InlineCode,
  tags: ["autodocs"],
  argTypes: {
    className: {
      description: "Accepts both standard CSS and Tailwind utility classes",
      control: "text",
    },
    children: {
      description: "The inline code you'd like to highlight.",
      control: "text",
    },
  },
  args: {
    children: "const hello = 'world'",
  },
} satisfies Meta<typeof InlineCode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
