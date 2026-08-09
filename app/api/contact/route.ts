import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "ToolNova <onboarding@resend.dev>",
      to: ["usstory33@gmail.com"],
      subject: `New Contact Message from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    if (error) {
      return Response.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: "Message sent successfully",
      data,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return Response.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}