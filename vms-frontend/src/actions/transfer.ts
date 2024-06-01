"use server";

async function postTransfer(newTransfer: FormData) {
  const response = await fetch(process.env.API!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      vid: newTransfer.get("vid"),
      to: newTransfer.get("to"),
    }),
  });
  if (!response.ok) {
    throw new Error("Failed to post transfer");
  }
  return response.status;
}

async function getAll() {
  const response = await fetch(`${process.env.API}/transfer`, {
    method: "GET",
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to get vehicles");
  }
  const res = await response.json();
  return res;
}

export { postTransfer, getAll };
