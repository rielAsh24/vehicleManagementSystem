import { z } from "zod";

// SCHEMAS
const transferSchema = z.object({
  vid: z.number().min(4, {
    message: "Vehicle Number must be atleast 4 digits",
  }),
  to: z.number(),
});

// TYPES
type transferSchemaType = z.infer<typeof transferSchema>;

type transferData = {
  v_num: number;
  fromOwner: number;
  toOwner: number;
  t_date: Date;
};

export { transferSchema };
export type { transferData, transferSchemaType };
