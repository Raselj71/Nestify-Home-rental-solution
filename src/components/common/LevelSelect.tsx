"use client";
import React, { ReactNode } from "react";
import { Controller } from "react-hook-form";
import type { Control } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Callout, Flex, Select, Text, TextField } from "@radix-ui/themes";

import { getAllDistricts, getAllUpazilas, getDistrictsByDivision, getUpazilasByDistrict } from "@/utils/Address";
import { SelectTrigger } from "@radix-ui/react-select";

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
  onChange?: (value: string[]) => void;
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
    <label className={cn(" rounded-3 w-full ", className)}>
      {label && (
        <Flex className=" my-2">
          <Text as="label" size="3" >
            {label}
          </Text>
          {required && <Text color="ruby">*</Text>}
        </Flex>
      )}

      <Controller
        name={name}
        control={control}
        disabled={isDisabled || data.length===0}
        
        
        render={({ field }) => (
          

          <Select.Root  size={size}  onValueChange={field.onChange}  {...rest} >
            	<Select.Trigger
								placeholder={placeholder}
								className={'w-full!'}
							/>

            <Select.Content>
              <Select.Group>
              <Select.Label>{label}</Select.Label>

                {data.map((item, index) => (
                  <Select.Item key={index} value={item}>
                    {item}
                  </Select.Item>
                ))}
              </Select.Group>
            </Select.Content>
          </Select.Root>
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
