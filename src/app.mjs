export function welcomeMessage(name = "there") {
  return `Welcome, ${name}!`;
}

/**
 * Avoid writing the same welcome text on every click. Repeated DOM writes are
 * noisy for observers and can trigger duplicate update work in real UIs.
 */
export function applyWelcomeMessage(message, name = "Loop") {
  if (!message) return false;
  const next = welcomeMessage(name);
  if (message.textContent === next) return false;
  message.textContent = next;
  return true;
}

if (typeof document !== "undefined") {
  const button = document.querySelector("#welcome");
  const message = document.querySelector("#message");

  button?.addEventListener("click", () => {
    applyWelcomeMessage(message, "Loop");
  });
}
