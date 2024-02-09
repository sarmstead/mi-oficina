import type { Meta, StoryObj } from "@storybook/react";

import CodeBlock from "~/components/Code/CodeBlock";

const meta = {
  component: CodeBlock,
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
      description: "The programming language used in the code block.",
      control: "text",
    },
    fileName: {
      description:
        "Make the code block look like VS Code! The filename will display just above the code block.",
      control: "text",
    },
  },
  args: {
    code: "const dog = 'scooby'\nconst getAwayVehicle = 'mystery van'\nconsole.error(`${dog}, get in the ${getAwayVehicle} ASAP!`)",
    fileName: "scoobydude.js",
    language: "javascript",
  },
} satisfies Meta<typeof CodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
