"use client";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";
import { Avatar, Button, DropdownMenu } from "@radix-ui/themes";
import React from "react";

function NavUser() {
  const { user, loading } = useAuth();

  if (!user || loading) return null;
  console.log("user", user);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger  >
        
      <Button variant="ghost" color="mint" radius="full">
    <Avatar
      fallback="RA"
      radius="full"
      size={{
        initial: "3",
        lg: "4",
      }}
      src={user?.avatar || ""}
    />
  </Button>
             
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end" size={"2"}>
        <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
        <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
          <DropdownMenu.SubContent>
            <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
            <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>

            <DropdownMenu.Separator />
            <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
          </DropdownMenu.SubContent>
        </DropdownMenu.Sub>

        <DropdownMenu.Separator />
        <DropdownMenu.Item>Share</DropdownMenu.Item>
        <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
          Delete
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

export default NavUser;
