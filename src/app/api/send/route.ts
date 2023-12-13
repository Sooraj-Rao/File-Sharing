import { EmailTemplate } from "@/Components/email_template";
import { FileNameLogic } from "@/utils/CommonLogic";
import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const response = await req.json();
  const user = response?.userName
    ? response?.userName
    : FileNameLogic(response?.userEmail?.split("@")[0].replace(/[0-9_]/g, ""));
  try {
    const data = await resend.emails.send({
      from: "File-Sharing@resend.dev",
      to: ["soorajrao630@gmail.com"],
      subject: user + " shared this file with you!",
      react: EmailTemplate({ response }),
    });
    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
