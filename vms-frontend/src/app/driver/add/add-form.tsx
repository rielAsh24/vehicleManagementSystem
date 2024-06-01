"use client";

import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postDriver } from "@/actions/driver";

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

import { driverSchemaType, driverSchema } from "@/lib/driver.dto";
// import { useState } from "react";

export default function AddDriver() {
  const { pending } = useFormStatus();
  // const [invalid, setInvalid] = useState<boolean>(false);

  const form = useForm<driverSchemaType>({
    resolver: zodResolver(driverSchema),
    defaultValues: {
      driverName: "",
      phoneNumber: "",
      profilePhoto: "",
    },
  });

  // const handleOnSubmit = (values: driverSchemaType) => {
  //   postDriver(values)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <Form {...form}>
      <form
        action={postDriver}
        // onSubmit={form.handleSubmit(handleOnSubmit)}
        className="grid w-[400px] grid-flow-row items-center gap-y-4"
      >
        <FormField
          control={form.control}
          name="driverName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Jay Dev" {...field} />
              </FormControl>
              <FormDescription>Please enter the full name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="1234567890" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="profilePhoto"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Add Photo</FormLabel>
              <FormControl>
                <Input type="file" {...field} />
              </FormControl>
              <FormDescription>File Size Limit: 1MB</FormDescription>
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
