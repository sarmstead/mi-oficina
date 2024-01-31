"use server";

import { z } from "zod";
import { phone } from "phone";

import createMessagesTable from "./create-table-action";
import addMessageRow from "./add-row-action";
import { sendEmail } from "~components/Email/send-email-action";
import { Received } from "~components/Email";

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

  // TODO: Should send a confirmation email to the user of the form after form submission
  // TODO: Should email Sunjay after form submission with a form summary if validations pass
  // createMessagesTable().then(() => {
  //   addMessageRow(validation.data).then((payload) => {
  //     return payload;
  //   });
  // });

  const emailData = {
    firstName: validation?.data?.firstName,
    lastName: validation.data?.lastName,
    email: validation.data?.email,
    subject: `Thanks for your message, ${validation?.data?.firstName}`,
  };

  sendEmail(emailData, Received);
};
