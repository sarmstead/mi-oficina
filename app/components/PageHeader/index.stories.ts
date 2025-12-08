import type { Meta, StoryObj } from "@storybook/nextjs";

import PageHeader from "~components/PageHeader";

const meta = {
  component: PageHeader,
  argTypes: {
    lightBackground: {
      control: "text",
      description: "Tailwind class for light mode",
    },
    darkBackground: {
      control: "text",
      description: "Tailwind class for dark mode",
    },
    title: {
      control: "text",
      description: "Title of header",
    },
    subtitle: {
      control: "text",
      description: "Subtitle of header",
    },
  },
  args: {
    lightBackground: "bg-black",
    darkBackground: "dark:bg-prettyDark",
    title: "A case study: Lorem Ipsum",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
