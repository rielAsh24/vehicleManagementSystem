"use server";

async function postDriver(newDriver: FormData) {
  const response = await fetch(`${process.env.API}/driver`, {
    method: "POST",
    body: newDriver,
  });
  if (!response.ok) {
    throw new Error("Failed to post driver");
  }
  return response.status;
  // const res = await response.json();
  // console.log(res);
}

async function getAll() {
  const response = await fetch(`${process.env.API}/driver`, {
    method: "GET",
  });
  if (!response.ok) {
    // throw new Error("Failed to post vehicle");
    console.error(response.status);
  }
  const res = await response.json();
  return res;
}

export { postDriver, getAll };
