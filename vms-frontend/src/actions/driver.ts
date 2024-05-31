"use server";

async function postDriver(newDriver: FormData) {
  const response = await fetch(`${process.env.API}/driver`, {
    method: "POST",
    body: newDriver
  });
  if (!response.ok) {
    throw new Error("Failed to post driver");
  }
  return response.status;
  // const res = await response.json();
  // console.log(res);
}

export { postDriver };
