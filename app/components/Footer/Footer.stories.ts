import type { Meta, StoryObj } from "@storybook/nextjs";

import Footer from "~components/Footer/Footer";

const meta = {
  component: Footer,
  tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
