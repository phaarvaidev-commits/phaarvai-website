#!/usr/bin/env node
/**
 * POST a test contact submission to a running Phaarvai instance.
 * Usage: node scripts/test-contact.mjs [baseUrl]
 * Requires RESEND_API_KEY + CONTACT_TO_EMAIL in the server's environment for emailed: true.
 */

const baseUrl = process.argv[2] ?? "http://localhost:3000";

const payload = {
  name: "Phaarvai Contact Test",
  email: "contact-test@phaarvai.com",
  organization: "Phaarvai Internal",
  partnerType: "Institutional",
  themeInterest: "Applied AI systems",
  message: "Automated contact routing test — please ignore if received in production inbox.",
};

async function main() {
  const health = await fetch(`${baseUrl}/api/healthz`).then((r) => r.json());
  console.log("Health:", JSON.stringify(health, null, 2));

  const res = await fetch(`${baseUrl}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const body = await res.json();
  console.log(`Contact POST ${res.status}:`, JSON.stringify(body, null, 2));

  if (!res.ok) process.exit(1);
  if (!body.emailed) {
    console.warn("\nWarning: submission accepted but email was not sent. Set RESEND_API_KEY and CONTACT_TO_EMAIL on the server.");
    process.exit(2);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
