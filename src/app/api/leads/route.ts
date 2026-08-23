import { NextResponse } from "next/server";
import { db } from "@/db";
import { leads } from "@/db/schema";

export const runtime = "nodejs";

type LeadPayload = {
  name?: unknown;
  phone?: unknown;
  message?: unknown;
  consent?: unknown;
  source?: unknown;
};

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim().slice(0, 500) : "";
}

export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Некорректные данные" }, { status: 400 });
  }

  const name = clean(body.name);
  const phone = clean(body.phone);
  const message = clean(body.message);
  const consent = body.consent === true;
  const source = clean(body.source) || "site";

  if (!name || name.length < 2) {
    return NextResponse.json({ ok: false, error: "Укажите ваше имя" }, { status: 400 });
  }
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15) {
    return NextResponse.json({ ok: false, error: "Укажите корректный номер телефона" }, { status: 400 });
  }
  if (!consent) {
    return NextResponse.json(
      { ok: false, error: "Необходимо согласие на обработку персональных данных" },
      { status: 400 },
    );
  }

  const [row] = await db.insert(leads).values({ name, phone, message, source, consent }).returning();

  return NextResponse.json({ ok: true, id: row.id });
}
