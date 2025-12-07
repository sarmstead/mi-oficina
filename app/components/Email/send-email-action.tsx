"use server";

import { Resend } from "resend";
import { ComponentType } from "react";

type EmailData = {
  firstName: string;
  lastName: string;
  recipientEmail: string;
  senderEmail?: string;
  subject: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);
const senderName = process.env.EMAIL_SEND_NAME;
const defaultSenderAddress = process.env.EMAIL_ADMIN_ADDRESS;

export const sendEmail = async (
  { ...data }: EmailData,
  Component: ComponentType<EmailData>,
) => {
  const recipientName = `${data.firstName} ${data.lastName}`;
  const sendFrom = data.senderEmail ? data.senderEmail : defaultSenderAddress;
  const subject = data.subject;
  const { error } = await resend.emails.send({
    from: `${senderName} <${sendFrom}>`,
    to: `${recipientName} <${data.recipientEmail}>`,
    subject: subject,
    react: <Component {...data} />,
  });

  if (error) {
    console.log(error);
    return {
      message: "Yikes! We ran into an error sending that email.",
      error,
    };
  }

  console.log(`Successfully sent an email to ${data.recipientEmail}`);

  return { message: "Successfully sent an email!", error: [] };
};
