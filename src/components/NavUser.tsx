"use client";
import { useAuth } from "@/hooks/useAuth";


import React from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { BadgeCheck, Bell, UserIcon } from "lucide-react";

import LogoutMenu from "./common/LogoutMenu";


function NavUser() {
  const { user, loading } = useAuth();

 

  if (!user || loading) return null;


  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
      
       <div>
       <Avatar className="size-10 rounded-lg">
          <AvatarImage src={user.avatar ?? ""} alt={user.fullName ?? ""} />
          <AvatarFallback className="rounded-lg">
            <UserIcon className="size-5" />
          </AvatarFallback>
        </Avatar>
       
       </div>
      
    </DropdownMenuTrigger>
    <DropdownMenuContent
      className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
    
      align="end"
      sideOffset={4}
    >
      <DropdownMenuLabel className="p-0 font-normal">
        <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
          <Avatar className="h-8 w-8 rounded-lg">
            <AvatarImage src={user.avatar ?? ""} alt={user.fullName ?? ""} />
            <AvatarFallback className="rounded-lg">
              <UserIcon className="size-4" />
            </AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">
              {user.fullName}
            </span>
            <span className="truncate text-xs">{user.email}</span>
          </div>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup >
        {user?.user_metadata?.phone_verified && (
          <DropdownMenuItem>
            <BadgeCheck />
            Verify
          </DropdownMenuItem>
        )}
        <DropdownMenuItem>
          <UserIcon />
          Account
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Bell />
          Notifications
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <LogoutMenu />
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
  );
}

export default NavUser;
