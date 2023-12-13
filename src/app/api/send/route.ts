import { EmailTemplate } from "@/Components/email_template";
import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const response = await req.json();
  try {
    const data = await resend.emails.send({
      from: "File-Sharing@resend.dev",
      to: [response?.userEmail],
      subject: response?.userName + " shared this file with you!",
      react: EmailTemplate({ response }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
