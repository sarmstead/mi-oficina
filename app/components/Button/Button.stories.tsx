import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "~components/Button/Button";

const meta = {
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    backgroundType: {
      options: ["solid", "clear"],
      control: {
        type: "radio",
      },
      description: "Is the button on a dark colored background?",
      defaultValue: "clear",
    },
    href: {
      control: "text",
      description: "Name of icon",
      defaultValue: "#",
    },
    onClick: {
      action: "clicked",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Link: Story = {
  args: {
    backgroundType: "clear",
    href: "#",
    target: "_blank",
  },
  render: function Render(args) {
    return (
      <Button
        backgroundType={args.backgroundType}
        href={args.href}
        target={args.target}
      >
        I&apos;ll take you places
      </Button>
    );
  },
};

export const Action: Story = {
  args: {
    backgroundType: "clear",
    onClick: action("Ah, I'm clicked!"),
  },
  render: function Render(args) {
    return (
      <Button backgroundType={args.backgroundType} onClick={args.onClick}>
        Check my actions panel
      </Button>
    );
  },
};
