import type { ArgTypes } from "@storybook/nextjs";
import type { EmailProps } from "~components/Email";

export const emailArgTypes = {
  firstName: {
    control: { type: "text" },
    description: "First name of recipient",
  },
  lastName: {
    control: { type: "text" },
    description: "Last name of recipient",
  },
  company: {
    control: { type: "text" },
    description: "Company name of recipient",
  },
  recipientEmail: {
    control: { type: "text" },
    description: "Email of recipient",
  },
  phone: {
    control: { type: "text" },
    description: "Phone number of recipient",
  },
  message: {
    control: { type: "text" },
    description: "Recipient's message",
  },
 } satisfies Partial<ArgTypes<EmailProps>>;

export const emailArgs = {
  firstName: "Eugene",
  lastName: "Krabs",
  company: "The Crusty Krab",
  recipientEmail: "krabs@dev.int",
  phone: "+15618675309",
  message:
    "Hey, Sunjay. How about you build me the krabbyPattyApp? It's a great idea from SpongeBob and Squidward is even on board. I'm planning to throw in fun promotions, clarinets, and some pizza vouchers. What do you say?",
};
