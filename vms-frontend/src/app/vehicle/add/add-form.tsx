"use client";

import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postVehicle } from "@/actions/vehicle";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { vehicleSchema, vehicleSchemaType } from "@/lib/vehicle.dto";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AddVehicle() {
  const { pending } = useFormStatus();

  const form = useForm<vehicleSchemaType>({
    resolver: zodResolver(vehicleSchema),
    defaultValues: {
      vehicleNumber: 0,
      vehicleType: "",
      puc: "",
      insurance: "",
    },
  });

  return (
    <Form {...form}>
      <form
        action={postVehicle}
        className="grid w-[400px] grid-flow-row items-center gap-y-4"
      >
        <FormField
          control={form.control}
          name="vehicleNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vehicle Number</FormLabel>
              <FormControl>
                <Input placeholder="Jay Dev" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="vehicleType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vehicle Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  {/* <Input placeholder="Select Type" {...field} /> */}
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Vehicle Type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="compact">Compact</SelectItem>
                  <SelectItem value="sedan">Sedan</SelectItem>
                  <SelectItem value="bike">Bike</SelectItem>
                  <SelectItem value="truck">Truck</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="puc"
          render={({ field }) => (
            <FormItem>
              <FormLabel>PUC Certificate (PDF)</FormLabel>
              <FormControl>
                <Input type="file" {...field} />
              </FormControl>
              <FormDescription>PDF File Size Limit: 1MB</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="insurance"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vehicle Insurance (PDF)</FormLabel>
              <FormControl>
                <Input type="file" {...field} />
              </FormControl>
              <FormDescription>PDF File Size Limit: 1MB</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={pending}>
          Add
        </Button>
      </form>
    </Form>
  );
}
