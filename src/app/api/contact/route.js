import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...body,
      access_key: process.env.WEB3FORMS_KEY, // NEXT_PUBLIC_ ছাড়া
    }),
  });

  const result = await res.json();

  if (res.ok) return NextResponse.json({ success: true });
  return NextResponse.json({ success: false }, { status: 500 });
}