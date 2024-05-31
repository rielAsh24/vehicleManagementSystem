import { z } from "zod";

// SCHEMAS
const vehicleSchema = z.object({
  vehicleNumber: z.number().max(4, {
    message: "Vehicle Number must be 4 digits"
  }),
  vehicleType: z.string(),
  puc: z.any(z.instanceof(File)),
  insurance: z.any(z.instanceof(File))
});

// TYPES
type vehicleData = z.infer<typeof vehicleSchema>;

export { vehicleSchema };
export type { vehicleData };