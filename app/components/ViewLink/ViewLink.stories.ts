import type { Meta, StoryObj } from "@storybook/react";

import ViewLink from "~components/ViewLink/ViewLink";

const meta = {
  component: ViewLink,
  argTypes: {
    href: {
      control: "text",
      description: "URL of the link",
    },
    target: {
      control: "text",
      description: "The browsing context of the link",
    },
    title: {
      control: "text",
      description: "Title of the link",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ViewLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    href: "#",
    target: "_blank",
    title: "View Case Study",
  },
};
