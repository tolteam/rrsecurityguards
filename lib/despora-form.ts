/**
 * Forwards a lead to Despora (server-side). Never throws; never blocks the
 * user's submission for more than ~6 s. The key stays on the server.
 */
const SOURCES = ["direct", "organic", "social", "gbp", "paid"];

export async function forwardLeadToDespora(
  req: Request,
  lead: {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
    page?: string;
    fields?: Record<string, unknown>;
  }
): Promise<void> {
  try {
    const key = process.env.DESPORA_FORM_KEY;
    if (!key) {
      console.warn("[despora-form] DESPORA_FORM_KEY not set; skipping");
      return;
    }
    const m = (req.headers.get("cookie") || "").match(/(?:^|;\s*)_tn_src=([^;]+)/);
    const c = m ? decodeURIComponent(m[1]).toLowerCase() : "";
    const source = SOURCES.includes(c) ? c : "direct";
    const res = await fetch("https://www.despora.ai/api/webhook/form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key, ...lead, source }),
      signal: AbortSignal.timeout(6000),
    });
    if (!res.ok) console.error("[despora-form] webhook status", res.status);
  } catch (err) {
    console.error("[despora-form] forward failed:", err);
  }
}
