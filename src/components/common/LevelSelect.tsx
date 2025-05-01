"use client";
import React, { ReactNode } from "react";
import { Controller } from "react-hook-form";
import type { Control } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Callout, Flex, Text, TextField } from "@radix-ui/themes";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type LabeledInputProps = {
  label?: string;
  control: Control<any>;
  required?: boolean;
  type?:
    | "number"
    | "search"
    | "time"
    | "text"
    | "hidden"
    | "tel"
    | "url"
    | "email"
    | "date"
    | "datetime-local"
    | "month"
    | "password"
    | "week"
    | undefined;
  name: string;
  min?: number;
  max?: number;
  data: string[];
  placeholder: string;
  icon?: ReactNode;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  size?: "1" | "2" | "3";
  error?: {
    message?: string;
  };
  onChange?: (value: string) => void;
  iconPosition?: "left" | "right";
  className?: string;
};

function LevelSelect({
  label,
  control,
  required = false,
  type = "text",
  name,
  placeholder,
  icon,
  isDisabled = false,
  isReadOnly = false,
  min,
  max,
  size = "2",
  error,
  data,
  onChange,
  iconPosition = "right",
  className,
  ...rest
}: LabeledInputProps) {
  return (
    <label className={cn("border-[1px] rounded-3 w-full ", className)}>
      {label && (
        <Flex className="px-2 mt-2">
          <Text as="label" size="2" color="gray">
            {label}
          </Text>
          {required && <Text color="ruby">*</Text>}
        </Flex>
      )}

      <Controller
        name={name}
        control={control}
        disabled={isDisabled}
        render={({ field }) => (
          

          <Select  onValueChange={field.onChange}  {...rest} >
            <SelectTrigger className="w-full mx-0 border-0">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
              <SelectLabel>Divsion</SelectLabel>

                {data.map((item, index) => (
                  <SelectItem key={index} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
      />

      {error && (
        <Callout.Root variant="soft" size="1" mt="2" color="red">
          <Callout.Icon></Callout.Icon>
          <Callout.Text>{error.message}</Callout.Text>
        </Callout.Root>
      )}
    </label>
  );
}

export default LevelSelect;
