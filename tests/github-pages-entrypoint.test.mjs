import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { test } from "node:test";

const root = process.cwd();

test("GitHub Pages root has an index entrypoint", () => {
  assert.equal(existsSync(join(root, "index.html")), true);
});

test("GitHub Pages root entrypoint routes visitors to the prototype", () => {
  const html = readFileSync(join(root, "index.html"), "utf8");

  assert.match(html, /planly-improved\//);
  assert.match(html, /Content Planning Operations Dashboard/);
});
