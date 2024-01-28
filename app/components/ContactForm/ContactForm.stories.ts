import type { Meta, StoryObj } from "@storybook/react";

import ContactForm from "~components/ContactForm/ContactForm";

const meta = {
  component: ContactForm,
  tags: ["autodocs"],
} satisfies Meta<typeof ContactForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
