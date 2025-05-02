'use client';

import React from 'react';
import { Controller } from 'react-hook-form';
import type { Control } from 'react-hook-form';
import { cn } from '@/lib/utils';
import {
  Callout,
  Checkbox,
  Flex,
  Text,
} from '@radix-ui/themes';

type CheckboxOption = {
  label: string;
  value: string;
};

type Props = {
  label?: string;
  name: string;
  control: Control<any>;
  required?: boolean;
  error?: {
    message?: string;
  };
  isDisabled?: boolean;
  className?: string;
  data: string[]; 
  onChange?: (values: string[]) => void;
};

const LevelCheckboxGroup: React.FC<Props> = ({
  label,
  name,
  control,
  required = false,
  error,
  isDisabled = false,
  className,
  data,
  onChange,
}) => {
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
        render={({ field }) => {
          const handleChange = (checked: boolean, value: string) => {
            let newValues = [...(field.value || [])];
            if (checked) {
              newValues.push(value);
            } else {
              newValues = newValues.filter((v) => v !== value);
            }

            field.onChange(newValues);
            if (onChange) onChange(newValues);
          };

          return (
            <Flex direction="row" gap="2" mt="2">
              {data.map((item, index) => (
                <Flex key={index} align="center" gap="2">
                  <Checkbox
                    checked={field.value?.includes(item)}
                    onCheckedChange={(checked) =>
                      handleChange(Boolean(checked), item)
                    }
                    disabled={isDisabled}
                  />
                  <Text size="2">{item}</Text>
                </Flex>
              ))}
            </Flex>
          );
        }}
      />

      {error?.message && (
        <Callout.Root variant="soft" size="1" mt="2" color="red">
          <Callout.Icon />
          <Callout.Text>{error.message}</Callout.Text>
        </Callout.Root>
      )}
    </label>
  );
};

export default LevelCheckboxGroup;
