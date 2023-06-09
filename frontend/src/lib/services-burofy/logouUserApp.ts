export async function logouUserApp() {
  const message = await fetch("/api/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return message.json();
}
