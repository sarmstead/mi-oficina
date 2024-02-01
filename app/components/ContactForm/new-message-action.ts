import { sql } from "@vercel/postgres";

type ValidFormData = {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

export const newMessage = async (data: ValidFormData) => {
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
