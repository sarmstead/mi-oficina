"use server";

import { revalidatePath } from "next/cache";

import { z } from "zod";
import { phone } from "phone";

import createMessagesTable from "./create-table-action";
import addMessageRow from "./add-row-action";
import { sendEmail } from "~components/Email/send-email-action";
import { Received, Success } from "~components/Email";

const schema = z.object({
  firstName: z.string().min(1, "First name cannot be blank"),
  lastName: z.string().min(1, "Last name cannot be blank"),
  company: z.string().refine(
    (value) => {
      if (value.length === 0) {
        return true;
      } else if (value.length >= 1 && value.length <= 250) {
        return true;
      } else {
        return false;
      }
    },
    { message: "Company name must be between 1 and 250 characters" },
  ),
  email: z.string().email().min(1, "Email cannot be blank"),
  phone: z
    .string()
    .refine((value) => value.length === 0 || phone(value).isValid, {
      message: "Invalid phone number",
    }),
  message: z
    .string()
    .min(1, "Message cannot be blank")
    .max(250, "Message should be less than 250 characters"),
});

export const contactAction = (_prevState: any, params: FormData) => {
  const validation = schema.safeParse({
    firstName: params.get("firstName"),
    lastName: params.get("lastName"),
    company: params.get("company"),
    email: params.get("email"),
    phone: params.get("phone"),
    message: params.get("message"),
  });

  if (!validation.success) {
    // TODO: Should email Sunjay after form submission with an error log if validations don't pass
    return {
      errors: validation.error.issues,
      message: "Yeah, that data is not valid.",
      status: 404,
    };
  }

  const recipientEmailData = {
    firstName: validation.data.firstName,
    lastName: validation.data.lastName,
    recipientEmail: validation.data?.email,
    subject: `Thanks for your message, ${validation?.data?.firstName}! 👋🏽`,
  };

  const adminEmailData = {
    firstName: validation.data.firstName,
    lastName: validation.data.lastName,
    company: validation.data.company,
    phone: validation.data.phone,
    recipientEmail: process.env.EMAIL_ADMIN_ADDRESS as string,
    message: validation.data.message,
    subject: "New message from the website! 🎉",
  };

  createMessagesTable().then(() => {
    addMessageRow(validation.data).then((payload) => {
      console.log({ payload });
      sendEmail(recipientEmailData, Received);
      sendEmail(adminEmailData, Success);
      revalidatePath("/");
    });
  });
};
