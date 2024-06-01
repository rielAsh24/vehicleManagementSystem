"use server";

import { driverSchema } from "@/lib/driver.dto";

async function postDriver(newDriver: FormData) {
  const parsing = driverSchema.safeParse(Object.fromEntries(newDriver));

  if (!parsing.success) throw parsing.error;
  else {
    const response = await fetch(`${process.env.API}/driver`, {
      method: "POST",
      body: newDriver,
    });
    if (!response.ok) {
      throw new Error("Failed to post driver");
    }
    return response.status;
  }
}

async function getAll() {
  const response = await fetch(`${process.env.API}/driver`, {
    method: "GET",
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to post vehicle");
  }
  const res = await response.json();
  return res;
}

export { postDriver, getAll };
