import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { test } from "node:test";

const root = join(process.cwd(), "planly-improved");

function read(relativePath) {
  return readFileSync(join(root, relativePath), "utf8");
}

test("Planly improved prototype exposes the expected product views", () => {
  const html = read("index.html");
  const requiredViews = [
    "dashboard",
    "planner",
    "ideas",
    "analytics",
    "campaigns",
    "calendar",
    "settings",
  ];

  for (const view of requiredViews) {
    assert.match(html, new RegExp(`data-view="${view}"`));
  }

  assert.match(html, /Planly Command Center/);
  assert.match(html, /Priority Queue/);
  assert.match(html, /Content Pipeline/);
});

test("Planly improved prototype replaces fragile export patterns with shared assets", () => {
  const html = read("index.html");
  const css = read("styles.css");

  assert.doesNotMatch(html, /cdn\.tailwindcss\.com/);
  assert.doesNotMatch(html, /fonts\.googleapis\.com/);
  assert.match(css, /--color-primary:/);
  assert.match(css, /--sidebar-width:/);
  assert.match(css, /@media \(max-width: 860px\)/);
});

test("Planly improved prototype provides accessible interactive navigation hooks", () => {
  const html = read("index.html");
  const js = read("app.js");

  assert.match(html, /role="tablist"/);
  assert.match(html, /aria-selected="true"/);
  assert.match(js, /function setView/);
  assert.match(js, /localStorage\.setItem\("planly-active-view"/);
});

test("Planly improved prototype suppresses the default full-section focus outline", () => {
  const css = read("styles.css");

  assert.match(css, /\.view:focus\s*{/);
  assert.match(css, /\.view:focus-visible\s*{/);
  assert.match(css, /outline:\s*none/);
});
