'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Controller } from 'react-hook-form';
import type { Control } from 'react-hook-form';
import { cn } from '@/lib/utils';
import {
  Callout,
  Flex,
  Text,
  IconButton,
  ScrollArea,
  Separator,
} from '@radix-ui/themes';
import { Cross2Icon, UploadIcon } from '@radix-ui/react-icons';

type Props = {
  label?: string;
  name: string;
  control: Control<any>;
  required?: boolean;
  error?: {
    message?: string;
  };
  className?: string;
  maxFiles?: number;
};

const LevelImageUploader: React.FC<Props> = ({
  label,
  name,
  control,
  required = false,
  error,
  className,
  maxFiles = 5,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<File[]>([]);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const newFiles = Array.from(files);
    const combined = [...images, ...newFiles].slice(0, maxFiles);
    setImages(combined);
  };

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
        defaultValue={[]}
        render={({ field }) => {
          // Sync state with form value on mount/update
          useEffect(() => {
            field.onChange(images);
          }, [images]);

          return (
            <>
              <div
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  handleFiles(e.dataTransfer.files);
                }}
                className="w-full mt-2 border border-dashed border-gray-300 rounded-md h-40 flex items-center justify-center cursor-pointer hover:border-gray-500 transition"
              >
                <Flex direction="column" align="center">
                  <UploadIcon width={24} height={24} />
                  <Text size="2" color="gray">
                    Drag & Drop files here or click to browse
                  </Text>
                </Flex>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  hidden
                  onChange={(e) => handleFiles(e.target.files)}
                />
              </div>

              {images.length > 0 && (
                <ScrollArea type="always" scrollbars="horizontal" className="mt-3">
                  <Flex gap="3" className="overflow-x-auto py-2">
                    {images.map((file, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={URL.createObjectURL(file)}
                          alt="Preview"
                          className="h-20 w-20 object-cover rounded-md border"
                        />
                        <IconButton
                          color="red"
                          variant="soft"
                          size="1"
                          className="absolute top-[-6px] right-[-6px] opacity-0 group-hover:opacity-100 transition"
                          onClick={(e) => {
                            e.stopPropagation();
                            const updated = [...images];
                            updated.splice(index, 1);
                            setImages(updated);
                          }}
                        >
                          <Cross2Icon />
                        </IconButton>
                      </div>
                    ))}
                  </Flex>
                  <Separator size="4" />
                </ScrollArea>
              )}
            </>
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

export default LevelImageUploader;
