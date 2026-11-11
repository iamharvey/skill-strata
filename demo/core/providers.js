// 大模型接入：浏览器与 Node 通用（均依赖 fetch）。
export class PendingError extends Error {
  constructor(call) { super(`等待回复：${call.id}`); this.call = call; }
}

export function makeLLM(cfg) {
  const temperature = cfg.temperature ?? 0;
  switch (cfg.provider) {
    case "openai":
      return async ({ system, user }) => {
        const base = (cfg.baseUrl || "https://api.openai.com/v1").replace(/\/$/, "");
        const res = await fetch(`${base}/chat/completions`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${cfg.apiKey}` },
          body: JSON.stringify({ model: cfg.model, temperature, messages: [{ role: "system", content: system }, { role: "user", content: user }] }),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}: ${(await res.text()).slice(0, 300)}`);
        return (await res.json()).choices[0].message.content;
      };
    case "anthropic":
      return async ({ system, user }) => {
        const res = await fetch(`${(cfg.baseUrl || "https://api.anthropic.com").replace(/\/$/, "")}/v1/messages`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json", "x-api-key": cfg.apiKey, "anthropic-version": "2023-06-01",
            "anthropic-dangerous-direct-browser-access": "true",
          },
          body: JSON.stringify({ model: cfg.model, max_tokens: 2000, temperature, system, messages: [{ role: "user", content: user }] }),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}: ${(await res.text()).slice(0, 300)}`);
        return (await res.json()).content.map((b) => b.text || "").join("");
      };
    case "bridge":
      return async ({ id, stage, system, user }) => {
        const res = await fetch(`${(cfg.baseUrl || "http://127.0.0.1:8787").replace(/\/$/, "")}/complete`, {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id, stage, system, user }),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}: ${(await res.text()).slice(0, 300)}`);
        return (await res.json()).text;
      };
    case "replay":
      return async (call) => {
        const r = cfg.responses?.[call.id];
        if (r === undefined) throw new PendingError(call);
        return r;
      };
    default:
      throw new Error(`未知 provider：${cfg.provider}`);
  }
}
