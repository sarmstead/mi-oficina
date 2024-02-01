import { sql } from "@vercel/postgres";

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);

  try {
    await sql`INSERT INTO Messages (first_name, last_name, company, email, phone, message) VALUES (${searchParams.get("firstName")}, ${searchParams.get("lastName")}, ${searchParams.get("company")}, ${searchParams.get("email")}, ${searchParams.get("phone")}, ${searchParams.get("message")});`;
    return Response.json({
      errors: [],
      message: "Successfully added row to Messages table",
      status: 201,
    });
  } catch (error) {
    return Response.json({
      errors: [error],
      message: "Aye! We ran into an error.",
      status: 500,
    });
  }
}
