import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const rateLimits = new Map<string, { count: number; reset: number }>();
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT = 3;

function isRateLimited(ip: string) {
  const now = Date.now();
  const record = rateLimits.get(ip);

  if (!record || now > record.reset) {
    rateLimits.set(ip, { count: 1, reset: now + RATE_WINDOW_MS });
    return false;
  }

  if (record.count >= RATE_LIMIT) {
    return true;
  }

  record.count += 1;
  rateLimits.set(ip, record);
  return false;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = (body?.name || "").toString().trim();
    const email = (body?.email || "").toString().trim();
    const message = (body?.message || "").toString().trim();
    const honey = (body?.honey || "").toString();

    if (honey) {
      // Honeypot caught; silently succeed.
      return NextResponse.json({ ok: true });
    }

    if (!name || name.length < 2 || name.length > 60) {
      return NextResponse.json(
        { ok: false, error: "invalid_name" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: "invalid_email" },
        { status: 400 }
      );
    }

    if (!message || message.length < 30 || message.length > 2000) {
      return NextResponse.json(
        { ok: false, error: "invalid_message" },
        { status: 400 }
      );
    }

    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      // For production, use a shared store (Upstash/Redis) instead of in-memory.
      return NextResponse.json(
        { ok: false, error: "rate_limited" },
        { status: 429 }
      );
    }

    const to = process.env.CONTACT_TO;
    const from = process.env.CONTACT_FROM;
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey || !to || !from) {
      return NextResponse.json(
        { ok: false, error: "not_configured" },
        { status: 500 }
      );
    }

    const timestamp = new Date().toISOString();

    const result = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Portfolio contact — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nIP: ${ip}\nTime: ${timestamp}\n\n${message}`,
    });

    if (result.error) {
      return NextResponse.json(
        { ok: false, error: "send_failed" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { ok: false, error: "send_failed" },
      { status: 500 }
    );
  }
}
