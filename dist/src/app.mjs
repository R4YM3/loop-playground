export function welcomeMessage(name = "there") {
  return `Welcome, ${name}!`;
}

if (typeof document !== "undefined") {
  const button = document.querySelector("#welcome");
  const message = document.querySelector("#message");

  button?.addEventListener("click", () => {
    message.textContent = welcomeMessage("Loop");
  });
}
