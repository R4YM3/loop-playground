import test from "node:test";
import assert from "node:assert/strict";
import { applyWelcomeMessage, welcomeMessage } from "../src/app.mjs";

test("creates a welcoming message", () => {
  assert.equal(welcomeMessage("Loop"), "Welcome, Loop!");
});

test("does not write a duplicate welcome update", () => {
  let writes = 0;
  let value = "Ready for a safe end-to-end test.";
  const message = {
    get textContent() { return value; },
    set textContent(next) { writes += 1; value = next; },
  };

  assert.equal(applyWelcomeMessage(message, "Loop"), true);
  assert.equal(applyWelcomeMessage(message, "Loop"), false);
  assert.equal(message.textContent, "Welcome, Loop!");
  assert.equal(writes, 1);
});
