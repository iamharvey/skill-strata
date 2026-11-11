#!/usr/bin/env python3
"""本地 CLI 桥接：让网页通过 http://127.0.0.1:8787/complete 调用本机的大模型命令行工具。

用法示例：
  python bridge.py --cmd "claude -p"                 # Claude Code
  python bridge.py --cmd "codex exec -"              # OpenAI Codex CLI（从标准输入读提示）
  python bridge.py --cmd "ollama run qwen2.5"        # 本地 Ollama
  python bridge.py --cmd "llm -m gpt-4o-mini"        # simonw/llm

提示通过标准输入传入（system 与 user 合并），命令的标准输出作为模型回复返回。
只监听 127.0.0.1；允许跨域，便于在线 demo 页面调用本机。
"""
import argparse, json, shlex, subprocess, sys
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

ap = argparse.ArgumentParser()
ap.add_argument("--cmd", required=True, help="接收标准输入提示的 CLI 命令")
ap.add_argument("--port", type=int, default=8787)
ap.add_argument("--timeout", type=int, default=300)
ARGS = ap.parse_args()
CMD = shlex.split(ARGS.cmd)


def complete(system: str, user: str) -> str:
    prompt = f"<system>\n{system}\n</system>\n\n{user}\n"
    p = subprocess.run(CMD, input=prompt, capture_output=True, text=True, timeout=ARGS.timeout)
    if p.returncode != 0:
        raise RuntimeError(p.stderr.strip()[:500] or f"exit {p.returncode}")
    return p.stdout.strip()


class Handler(BaseHTTPRequestHandler):
    def _cors(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.send_header("Access-Control-Allow-Private-Network", "true")

    def do_OPTIONS(self):
        self.send_response(204); self._cors(); self.end_headers()

    def do_POST(self):
        if self.path != "/complete":
            self.send_response(404); self._cors(); self.end_headers(); return
        try:
            body = json.loads(self.rfile.read(int(self.headers.get("Content-Length", 0))))
            text = complete(body.get("system", ""), body.get("user", ""))
            out, code = {"text": text}, 200
            print(f"✓ {body.get('id', '?')}", file=sys.stderr)
        except Exception as e:  # noqa: BLE001
            out, code = {"error": str(e)}, 500
            print(f"✗ {e}", file=sys.stderr)
        data = json.dumps(out, ensure_ascii=False).encode()
        self.send_response(code); self._cors()
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        self.end_headers(); self.wfile.write(data)

    def log_message(self, *a):
        pass


if __name__ == "__main__":
    print(f"bridge on http://127.0.0.1:{ARGS.port}  →  {ARGS.cmd}", file=sys.stderr)
    ThreadingHTTPServer(("127.0.0.1", ARGS.port), Handler).serve_forever()
