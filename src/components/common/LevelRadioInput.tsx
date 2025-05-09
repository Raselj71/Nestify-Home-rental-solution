'use client';

import React from 'react';
import { Controller } from 'react-hook-form';
import type { Control } from 'react-hook-form';
import { cn } from '@/lib/utils';
import {
  Callout,
  Flex,
  RadioGroup,
  Text,
} from '@radix-ui/themes';

type LabeledInputProps = {
  label?: string;
  control: Control<any>;
  required?: boolean;
  name: string;
  placeholder?: string;
  isDisabled?: boolean;
  size?: '1' | '2' | '3';
  error?: {
    message?: string;
  };
  onChange?: (value: string) => void;
  className?: string;
  data?: string[];
};

function LevelRadioInput({
  label,
  control,
  required = false,
  name,
  placeholder,
  isDisabled = false,
  size = '2',
  error,
  onChange,
  className,
  data = [],
  ...rest
}: LabeledInputProps) {
  return (
    <label className={cn('w-full', className)}>
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
        render={({ field }) => (
          <RadioGroup.Root
            value={field.value}
            onValueChange={(val) => {
              field.onChange(val);
              if (onChange) onChange(val);
            }}
            disabled={isDisabled}
            size={size}
            {...rest}
          >
            <Flex gap="4" direction="row" mt="2" wrap="wrap">
              {data.map((item, index) => (
                <RadioGroup.Item  key={index} value={item}>
                  {item}
                </RadioGroup.Item>
              ))}
            </Flex>
          </RadioGroup.Root>
        )}
      />

      {error?.message && (
        <Callout.Root variant="soft" size="1" mt="2" color="red">
          <Callout.Icon />
          <Callout.Text>{error.message}</Callout.Text>
        </Callout.Root>
      )}
    </label>
  );
}

export default LevelRadioInput;
