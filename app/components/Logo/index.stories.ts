import type { Meta, StoryObj } from "@storybook/nextjs";

import { Logo } from "~logo/index";

const meta = {
  component: Logo,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
      description: "Name of icon",
    },
    className: {
      description: "Accepts both standard CSS and Tailwind utility classes",
      control: "text",
    },
    fill: {
      control: "text",
      description: "CSS fill color (not a Tailwind class name)",
    },
  },
  args: {
    fill: "black",
    className: "w-40",
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Abate: Story = {
  args: {
    name: "abate",
  },
};

export const Reviewed: Story = {
  args: {
    name: "reviewed",
    className: "w-60",
  },
};

export const Sunjay: Story = {
  args: {
    name: "sunjay",
  },
};

export const Webflow: Story = {
  args: {
    name: "webflow",
  },
};
