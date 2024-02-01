"use server";

import { z } from "zod";
import { phone } from "phone";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

import { sendEmail } from "~components/Email/send-email-action.tsx";
import { Received, Success } from "~components/Email";

type ValidData = {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

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

const newMessage = async (data: ValidData) => {
  try {
    await sql`INSERT INTO Messages (first_name, last_name, company, email, phone, message) VALUES (${data.firstName}, ${data.lastName}, ${data.company}, ${data.email}, ${data.phone}, ${data.message});`;
    return {
      errors: [],
      message: "Successfully added row to Messages table",
      status: 201,
    };
  } catch (error) {
    return {
      errors: [error],
      message: "Aye! We ran into an error.",
      status: 500,
    };
  }
};

const createTableIfNotExists = async () => {
  try {
    const exists = await sql`SELECT EXISTS (SELECT FROM Messages);`;
    if (exists)
      return {
        errors: [],
        message: "Messages table already exists. No new table created.",
        status: 200,
      };
    await sql`CREATE EXTENSION "uuid-ossp"`;
    await sql`CREATE TABLE IF NOT EXISTS Messages (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), first_name VARCHAR(250), last_name VARCHAR(250), company VARCHAR(250), email VARCHAR(250), phone VARCHAR(250), message VARCHAR(250), created_at timestamp DEFAULT now() NOT NULL);`;
    return {
      errors: [],
      message: "Successfully created the Messages table",
      status: 201,
    };
  } catch (error) {
    return {
      errors: [error],
      message: "Yikes, we ran into an error!",
      status: 500,
    };
  }
};

export const contactAction = async (_prevState: any, params: FormData) => {
  const validation = await schema.safeParse({
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
    recipientEmail: validation.data.email,
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

  await createTableIfNotExists()
    .then(() => {
      newMessage(validation.data)
        .then((data) => {
          sendEmail(recipientEmailData, Received);
          sendEmail(adminEmailData, Success);

          return data;
        })
        .catch((error) => {
          console.error(error);
          return error;
        });
    })
    .catch((error) => {
      console.error(error);
      return error;
    });

  revalidatePath("/");
};
