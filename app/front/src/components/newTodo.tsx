"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { AspidaClient } from "@/lib/utils";
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  text: z.string().min(2).max(200),
  description: z.string(),
});

export const NewTodo = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "",
      description: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const data = await AspidaClient.todo.post({
      body: {
        text: values.text,
        description: values.description || " ",
        done: false,
      },
    });
    console.log(data);
    form.reset();
    router.refresh();
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <div>
                <FormItem>
                  <FormLabel>text</FormLabel>
                  <FormControl>
                    <Input placeholder="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </div>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <div>
                <FormItem>
                  <FormLabel>description</FormLabel>
                  <FormControl>
                    <Input placeholder="description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </div>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};
