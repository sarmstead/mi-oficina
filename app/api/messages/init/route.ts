import { sql } from "@vercel/postgres";

export async function GET() {
  try {
    const exists = await sql`SELECT EXISTS (SELECT FROM Messages);`;
    if (exists)
      return Response.json({
        errors: [],
        message: "Messages table already exists. No new table created.",
        status: 200,
      });
    await sql`CREATE EXTENSION "uuid-ossp"`;
    await sql`CREATE TABLE IF NOT EXISTS Messages (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), first_name VARCHAR(250), last_name VARCHAR(250), company VARCHAR(250), email VARCHAR(250), phone VARCHAR(250), message VARCHAR(250), created_at timestamp DEFAULT now() NOT NULL);`;
    return Response.json({
      errors: [],
      message: "Successfully created the Messages table",
      status: 201,
    });
  } catch (error) {
    return Response.json({
      errors: [error],
      message: "Yikes, we ran into an error!",
      status: 500,
    });
  }
}
