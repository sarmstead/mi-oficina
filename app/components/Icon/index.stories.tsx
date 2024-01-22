import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "~icon/index";

const meta = {
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
      description: "Name of icon",
      defaultValue: "close",
    },
    className: {
      control: "text",
      defaultValue: "",
    },
    fill: {
      control: "text",
      description: "CSS fill color (not a Tailwind class name)",
      defaultValue: "black",
    },
    stroke: {
      control: "text",
      description: "CSS stroke color (not a Tailwind class name)",
      defaultValue: "black",
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Close: Story = {
  args: {
    name: "close",
    stroke: "black",
  },
};

export const Moon: Story = {
  args: {
    name: "moon",
    fill: "black",
  },
};

export const Sandwich: Story = {
  args: {
    name: "sandwich",
    stroke: "black",
  },
};

export const Sun: Story = {
  args: {
    name: "sun",
    fill: "black",
  },
};
