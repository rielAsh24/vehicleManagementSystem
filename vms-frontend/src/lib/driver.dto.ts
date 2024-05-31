import { z } from "zod";

// SCHEMAS
const driverSchema = z.object({
  driverName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phoneNumber: z.string().max(10, {
    message: "Invalid Phone",
  }),
  profilePhoto: z.any(z.instanceof(File)),
});

// TYPES
type driverSchemaType = z.infer<typeof driverSchema>;

type driverData = {
  driverName: string;
  phoneNumber: string;
};

export { driverSchema };
export type { driverData, driverSchemaType };
