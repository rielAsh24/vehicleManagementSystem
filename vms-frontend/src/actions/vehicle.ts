"use server";

import { vehicleSchema } from "@/lib/vehicle.dto";

async function postVehicle(newVehicle: FormData) {
  const parsing = vehicleSchema.safeParse(Object.fromEntries(newVehicle));

  if (!parsing.success) throw parsing.error;
  else {
    const response = await fetch(`${process.env.API}/vehicle`, {
      method: "POST",
      body: newVehicle,
    });
    if (!response.ok) {
      throw new Error("Failed to post vehicle");
    }
    return response.status;
  }
}

async function getAll() {
  const response = await fetch(`${process.env.API}/vehicle`, {
    method: "GET",
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to post vehicle");
  }
  const res = await response.json();
  return res;
}

export { postVehicle, getAll };
