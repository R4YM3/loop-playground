import { readFile } from "node:fs/promises";

const source = await readFile("src/app.mjs", "utf8");
if (!source.includes("export function welcomeMessage")) {
  throw new Error("Expected welcomeMessage export was not found.");
}
console.log("Typecheck fixture passed.");
