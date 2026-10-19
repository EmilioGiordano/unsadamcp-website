export interface Client {
  id: string;
  name: string;
  where: string;
  config: string;
}

export const clients: Client[] = [
  {
    id: "claude-code",
    name: "Claude Code",
    where: "En una terminal. Con -s user queda disponible en todas tus carpetas.",
    config: "claude mcp add unsada -s user -- npx -y unsada-mcp",
  },
  {
    id: "claude-desktop",
    name: "Claude Desktop",
    where: "En claude_desktop_config.json. Se abre desde Settings, Developer, Edit Config.",
    config: `{
  "mcpServers": {
    "unsada": { "command": "npx", "args": ["-y", "unsada-mcp"] }
  }
}`,
  },
  {
    id: "codex",
    name: "Codex",
    where: "En ~/.codex/config.toml.",
    config: `[mcp_servers.unsada]
command = "npx"
args = ["-y", "unsada-mcp"]`,
  },
  {
    id: "opencode",
    name: "OpenCode",
    where: "En opencode.json.",
    config: `{
  "mcp": {
    "unsada": { "type": "local", "command": ["npx", "-y", "unsada-mcp"] }
  }
}`,
  },
  {
    id: "cursor",
    name: "Cursor",
    where: "En ~/.cursor/mcp.json, o .cursor/mcp.json dentro de un proyecto.",
    config: `{
  "mcpServers": {
    "unsada": { "command": "npx", "args": ["-y", "unsada-mcp"] }
  }
}`,
  },
];
