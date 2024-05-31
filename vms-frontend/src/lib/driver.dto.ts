import { z } from "zod";

// SCHEMAS
const driverSchema = z.object({
  driverName: z.string().min(2, {
    message: "Name must be at least 2 characters."
  }),
  phoneNumber: z.string().max(10, {
    message: "Invalid Phone"
  }),
  profilePhoto: z.any(z.instanceof(File))
});

// TYPES
type driverData = z.infer<typeof driverSchema>;

export { driverSchema };
export type { driverData };
