import { readFile } from "node:fs/promises";

for (const file of ["index.html", "styles.css", "src/app.mjs"]) {
  const content = await readFile(file, "utf8");
  if (content.includes("TODO")) throw new Error(`${file} contains TODO`);
}
console.log("Lint passed.");
