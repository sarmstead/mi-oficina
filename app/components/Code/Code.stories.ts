import type { Meta, StoryObj } from "@storybook/react";

import Code from "~/components/Code";

const meta = {
  component: Code,
  tags: ["autodocs"],
  argTypes: {
    code: {
      description: "A utf8 string containing the code to be rendered",
      control: "text",
    },
    className: {
      description: "Accepts both standard CSS and Tailwind utility classes",
      control: "text",
    },
    language: {
      description:
        "The language used in the code block. Can be left blank to allow highlight.js to automatically infer the language.",
      control: "text",
    },
    fileName: {
      description:
        "Make the code block look like VS Code! The filename will display just above the code block.",
      control: "text",
    },
    block: {
      description: "Is this Code component meant to be a block or not?",
      control: "boolean",
    },
    children: {
      description: "This prop is used for inline code blocks.",
      control: "text",
    },
  },
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Inline: Story = {
  args: {
    children: "const hello = 'world'",
  },
};

export const CodeBlock: Story = {
  args: {
    block: true,
    fileName: "scoobydude.js",
    code: "const dog = 'scooby'\nconst getAwayVehicle = 'mystery van'\nconsole.error(`${dog}, get in the ${getAwayVehicle} ASAP!`)",
  },
};
