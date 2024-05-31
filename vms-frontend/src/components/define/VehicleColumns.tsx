"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Vehicles = {
  vehicleNumber: number;
  vehicleType: string;
  ownerId?: number;
};

export const columns: ColumnDef<Vehicles>[] = [
  {
    accessorKey: "driverName",
    header: "Vehicle Number"
  },
  {
    accessorKey: "vehicleType",
    header: "Type"
  },
  {
    accessorKey: "ownerId",
    header: "Owner"
  }
];
