import React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

interface IDialogModalProps {
  children: React.ReactNode;
  buttonText: string;
}

const DialogModal = ({ children, buttonText }: IDialogModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{buttonText}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">{children}</DialogContent>
    </Dialog>
  );
};

export default DialogModal;
