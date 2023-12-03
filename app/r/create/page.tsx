"use client";

import React from "react";
import axios, { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreateSubredditPayload } from "@/lib/validators/subreddit";
import { useToast } from "@/components/ui/use-toast";

const Page = () => {
  const { toast } = useToast();
  const { register, handleSubmit, watch } = useForm();

  const name = watch("name");

  const { mutate: createCommunity } = useMutation({
    mutationFn: async () => {
      const newPayload: CreateSubredditPayload = {
        name: name,
      };
      const { data } = await axios.post("/api/subreddit", newPayload);
      return data;
    },

    onSuccess: (data) => {
      return toast({
        variant: "default",
        title: "Creation Successfull",
        description: `${data}`,
      });
    },

    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error.response?.status === 409) {
          return toast({
            variant: "destructive",
            title: "Subreddit already exists.",
            description: `Please choose a different subreddit name.`,
          });
        }

        if (error.response?.status === 422) {
          return toast({
            variant: "destructive",
            title: "Invalid subreddit name.",
            description: `Please choose a name between 3 and 21 characters.`,
          });
        }

        if (error.response?.status === 401) {
          return toast({
            variant: "destructive",
            title: "Unauthorized.",
            description: `Please log in to create a subreddit`,
          });
        }
      }

      return toast({
        variant: "destructive",
        title: "Creation Error",
        description: `Error While creating a subreddit.`,
      });
    },
  });

  return (
    <div className="py-6">
      <h1 className="mb-4">Create Community</h1>
      <form
        onSubmit={handleSubmit(() => createCommunity())}
        className="space-y-5 max-w-sm border p-5 rounded-md"
      >
        <div>
          <Label className="block mb-2" htmlFor="name">
            Community Name
          </Label>
          <div className="relative mb-1">
            <span className="absolute left-2 top-1.5 text-gray-500">r/ </span>
            <Input id="name" className="pl-6" {...register("name")} />
          </div>
          <span className="text-sm text-gray-500">
            This is a public display name
          </span>
        </div>

        <Button type="submit">Create</Button>
      </form>
    </div>
  );
};

export default Page;
