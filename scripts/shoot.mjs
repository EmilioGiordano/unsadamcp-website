import { chromium } from "playwright-core";

const [, , url, out, width = "1440", height = "900", full = "full"] = process.argv;
const browser = await chromium.launch({ channel: "msedge" });
const page = await browser.newPage({
  viewport: { width: Number(width), height: Number(height) },
  colorScheme: process.env.SCHEME === "light" ? "light" : "dark",
});
await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(Number(process.env.WAIT ?? 1500));
await page.screenshot({ path: out, fullPage: full === "full" });
await browser.close();
