"use client";

import React from "react";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

const OAuthLogin = () => {
  const { toast } = useToast();

  const loginWithGoogle = async () => {
    try {
      return await signIn("google");
    } catch (error) {
      return toast({
        variant: "destructive",
        title: "Error",
        description: `There is an error: ${error}`,
        action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
      });
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 justify-center py-4">
      <div>
        <p>Welcome to Threddit</p>
      </div>
      <Button onClick={loginWithGoogle}>Login With Google</Button>
    </div>
  );
};

export default OAuthLogin;
