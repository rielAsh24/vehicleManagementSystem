import { z } from "zod";

// SCHEMAS
const vehicleSchema = z.object({
  vehicleNumber: z.number().max(4, {
    message: "Vehicle Number must be 4 digits",
  }),
  vehicleType: z.string(),
  puc: z.any(z.instanceof(File)),
  insurance: z.any(z.instanceof(File)),
});

// TYPES
type vehicleSchemaType = z.infer<typeof vehicleSchema>;

type vehicleData = {
  vehicleNumber: number;
  vehicleType: string;
  ownerId: number;
};

export { vehicleSchema };
export type { vehicleData, vehicleSchemaType };
