export const emailArgTypes = {
  firstName: {
    control: "text",
    description: "First name of recipient",
  },
  lastName: {
    control: "text",
    description: "Last name of recipient",
  },
  company: {
    control: "text",
    description: "Company name of recipient",
  },
  recipientEmail: {
    control: "text",
    description: "Email of recipient",
  },
  phone: {
    control: "text",
    description: "Phone number of recipient",
  },
  message: {
    control: "text",
    description: "Recipient's message",
  },
};

export const emailArgs = {
  firstName: "Eugene",
  lastName: "Krabs",
  company: "The Crusty Krab",
  recipientEmail: "krabs@dev.int",
  phone: "+15618675309",
  message:
    "Hey, Sunjay. How about you build me the krabbyPattyApp? It's a great idea from SpongeBob and Squidward is even on board. I'm planning to throw in fun promotions, clarinets, and some pizza vouchers. What do you say?",
};
