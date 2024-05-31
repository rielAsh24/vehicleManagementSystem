"use server";

async function postVehicle(newVehicle: FormData) {
  const response = await fetch(`${process.env.API}/vehicle`, {
    method: "POST",
    body: newVehicle,
  });
  if (!response.ok) {
    // throw new Error("Failed to post vehicle");
    console.error(response.status);
  }
  return response.status;
}

async function getAll() {
  const response = await fetch(`${process.env.API}/vehicle`, {
    method: "GET",
  });
  if (!response.ok) {
    // throw new Error("Failed to post vehicle");
    console.error(response.status);
  }
  const res = await response.json();
  return res;
}

export { postVehicle, getAll };
