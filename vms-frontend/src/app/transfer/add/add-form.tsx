"use client";

import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postTransfer } from "@/actions/transfer";

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

import { transferSchema, transferSchemaType } from "@/lib/transfer.dto";

export default function AddTransfer() {
  const { pending } = useFormStatus();

  const form = useForm<transferSchemaType>({
    resolver: zodResolver(transferSchema),
    defaultValues: {
      vid: 0,
      to: 0,
    },
  });

  return (
    <Form {...form}>
      <form
        action={postTransfer}
        className="grid w-[400px] grid-flow-row items-center gap-y-4"
      >
        <FormField
          control={form.control}
          name="vid"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vehicle Number</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Jay Dev" {...field} />
              </FormControl>
              <FormDescription>Must be atleast 4 digits.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="to"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Owner</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Select Type" {...field} />
              </FormControl>
              <FormDescription>Enter the ID of New Owner</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={pending}>
          Transfer
        </Button>
      </form>
    </Form>
  );
}
