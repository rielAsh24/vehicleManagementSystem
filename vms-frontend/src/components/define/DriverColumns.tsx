"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Drivers = {
  driverName: string;
  phoneNumber: number;
};

export const columns: ColumnDef<Drivers>[] = [
  {
    accessorKey: "driverName",
    header: "Name"
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone"
  }
];
