"use server";

import { z } from "zod";
import { phone } from "phone";
import { revalidatePath } from "next/cache";

import { assessRecaptcha } from "~components/ContactForm/recaptcha-action";
import { sendEmail } from "~components/Email/send-email-action";
import { createTableIfNotExists } from "~components/ContactForm/create-table-action";
import { newMessage } from "~components/ContactForm/new-message-action";
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

export const contactAction = async (_prevState: any, params: FormData) => {
  const recaptchaScore = await assessRecaptcha(
    params.get("token"),
    "contact_submit",
  );

  const validation = await schema.safeParse({
    firstName: params.get("firstName"),
    lastName: params.get("lastName"),
    company: params.get("company"),
    email: params.get("email"),
    phone: params.get("phone"),
    message: params.get("message"),
  });

  if (!validation.success || recaptchaScore > 0.7) {
    // TODO: Should email Sunjay after form submission with an error log if validations don't pass
    return {
      errors: validation.error.issues,
      message: "Yeah, that data is not valid.",
      status: 404,
    };
  }

  // const recipientEmailData = {
  //   firstName: validation.data.firstName,
  //   lastName: validation.data.lastName,
  //   recipientEmail: validation.data.email,
  //   subject: `Thanks for your message, ${validation?.data?.firstName}! 👋🏽`,
  // };

  // const adminEmailData = {
  //   firstName: validation.data.firstName,
  //   lastName: validation.data.lastName,
  //   company: validation.data.company,
  //   phone: validation.data.phone,
  //   recipientEmail: process.env.EMAIL_ADMIN_ADDRESS as string,
  //   message: validation.data.message,
  //   subject: "New message from the website! 🎉",
  // };

  // await createTableIfNotExists()
  //   .then(() => {
  //     newMessage(validation.data)
  //       .then((data) => {
  //         sendEmail(recipientEmailData, Received);
  //         sendEmail(adminEmailData, Success);

  //         return data;
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //         return error;
  //       });
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //     return error;
  //   });

  // revalidatePath("/");
};
