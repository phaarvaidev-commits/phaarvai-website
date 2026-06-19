import { NextResponse } from "next/server";

export async function GET() {
  const hasResend = Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL);
  const hasPostmark = Boolean(
    process.env.POSTMARK_SERVER_TOKEN &&
      process.env.CONTACT_TO_EMAIL &&
      process.env.CONTACT_FROM_EMAIL
  );

  return NextResponse.json({
    status: "ok",
    contact: {
      emailConfigured: hasResend || hasPostmark,
      provider: process.env.CONTACT_EMAIL_PROVIDER ?? (hasResend ? "resend" : hasPostmark ? "postmark" : "none"),
      persistEnabled: process.env.CONTACT_PERSIST === "true",
      toConfigured: Boolean(process.env.CONTACT_TO_EMAIL),
    },
  });
}
