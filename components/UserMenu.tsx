"use client";
import React, { FC } from "react";
import { User } from "next-auth";
import Link from "next/link";
import { signOut } from "next-auth/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface IUserMenuProps {
  user: Pick<User, "email" | "name" | "image">;
}

const UserMenu: FC<IUserMenuProps> = ({ user }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full">
        <Avatar>
          {typeof user.image === "string" && typeof user.image !== "boolean" ? (
            <AvatarImage src={user.image} alt="user-avatar" />
          ) : (
            <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
          )}
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          {user.name && <p className="text-base">{user.name}</p>}
          {user.email && <p className="font-normal text-sm">{user.email}</p>}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="">Create community</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="">Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer"
          onSelect={(event) => {
            event.preventDefault();
            signOut({
              callbackUrl: `/`,
            });
          }}
        >
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
