import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    console.log("API KEY:", process.env.WEB3FORMS_KEY); // debug

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...body,
        access_key: process.env.WEB3FORMS_KEY,
      }),
    });

    const text = await res.text(); 
    console.log("Web3Forms response:", text);

    const result = JSON.parse(text);

    if (res.ok) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: result }, { status: 500 });
    }
  } catch (err) {
    console.error("Route error:", err.message);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}