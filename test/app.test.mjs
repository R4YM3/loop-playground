import test from "node:test";
import assert from "node:assert/strict";
import { welcomeMessage } from "../src/app.mjs";

test("creates a welcoming message", () => {
  assert.equal(welcomeMessage("Loop"), "Welcome, Loop!");
});
