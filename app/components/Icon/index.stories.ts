import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "~icon/index";

const meta = {
  component: Icon,
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
    stroke: {
      control: "text",
      description: "CSS stroke color (not a Tailwind class name)",
    },
  },
  args: {
    className: "w-11",
    fill: "black",
    stroke: "black",
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ArrowRight: Story = {
  args: {
    name: "arrowright",
  },
};

export const Close: Story = {
  args: {
    name: "close",
  },
};

export const File: Story = {
  name: "File",
  args: {
    name: "file",
  },
};

export const GitHub: Story = {
  name: "GitHub",
  args: {
    name: "github",
  },
};

export const LinkedIn: Story = {
  name: "LinkedIn",
  args: {
    name: "linkedin",
  },
};

export const Moon: Story = {
  args: {
    name: "moon",
  },
};

export const Sandwich: Story = {
  args: {
    name: "sandwich",
  },
};

export const Sun: Story = {
  args: {
    name: "sun",
  },
};

export const YouTube: Story = {
  name: "YouTube",
  args: {
    name: "youtube",
  },
};
