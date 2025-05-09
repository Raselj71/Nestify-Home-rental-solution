"use client";

import {
  AspectRatio,
  Badge,
  Box,
  Flex,
  IconButton,
  Text,
} from "@radix-ui/themes";
import { useEffect, useState } from "react";
import {  PiTrashDuotone } from "react-icons/pi";
import Image from "next/image";

import { cn } from "@/lib/utils";
import showReport from "@/utils/ShowReport";
import { MdCloudUpload } from "react-icons/md";

type MultiImageInputProps = {
  label?: string;
  required?: boolean;
  previewRatio: number;
  width?: number;
  height?: number;
  maxSize?: number;
  fileNames?: string[]; // existing filenames if any
  selectedImages: File[];
  setSelectedImages: React.Dispatch<React.SetStateAction<File[]>>;
  className?: string;
};

const MultiImageInput = ({
  label,
  required,
  previewRatio,
  width = 400,
  height = 400,
  maxSize = 1,
  fileNames = [],
  selectedImages,
  setSelectedImages,
  className,
}: MultiImageInputProps) => {
  const [inputId, setInputId] = useState("");

  useEffect(() => {
    setInputId(`multi-image-input-${crypto.randomUUID()}`);
  }, []);

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const validFiles: File[] = [];

    for (const file of files) {
      if (file.size > maxSize * 1024 * 1024) {
        showReport(
          "Error",
          "Failed",
          `File "${file.name}" exceeds ${maxSize} MB.`
        );
        continue;
      }
      if (
        ![
          "image/jpg",
          "image/jpeg",
          "image/png",
          "image/webp",
          "image/avif",
        ].includes(file.type)
      ) {
        showReport("Error", "Failed", `"${file.name}" has unsupported format.`);
        continue;
      }
      const bitmap = await createImageBitmap(file);

      if (bitmap.width !== width || bitmap.height !== height) {
        showReport(
          "Error",
          "Failed",
          `"${file.name}" must be exactly ${width}x${height}.`
        );
        continue;
      }
      validFiles.push(file);
    }

    setSelectedImages((prev) => [...prev, ...validFiles]);
  };

  const getImageSrc = (image: File | string) => {
    if (typeof image === "string") {
      // Add your IMG_URL prefix here if needed
      return image;
    }
    return URL.createObjectURL(image);
  };

  const removeImage = (index: number) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Box>
      {label && (
        <Text size="2" weight="bold" align="center">
          {label} {required && <span className="text-red-10">*</span>}
        </Text>
      )}

      <Box
        className={cn(
          "w-full border border-dashed border-gray-a-6 rounded-2 p-4",
          className
        )}
      >
        <Flex
          direction="column"
          align="center"
          justify="center"
          className="w-full min-h-[200px] gap-4"
        >
          <input
            type="file"
            id={inputId}
            accept="image/jpeg,image/png,image/webp,image/avif"
            onChange={handleImageChange}
            className="hidden"
            multiple
          />

          <div className={cn("h-[180px] w-44 rounded-2 cursor-pointer")}>
            <label
              htmlFor={inputId}
              className={`h-full w-full flex flex-col items-center justify-center gap-2 cursor-pointer`}
            >
              <MdCloudUpload size={"40"} />

              <Text size="1" color="gray" align="center">
                Drag & Drop or Click to Upload
              </Text>
            </label>
          </div>
        </Flex>
      </Box>

      <Box
        className={cn(
          "w-full border border-dashed border-gray-a-6 rounded-2 p-4",
          className
        )}
      >
        <Flex
          direction="column"
          align="center"
          justify="center"
          className="w-full  gap-4"
        >
          {selectedImages.length > 0 && (
            <Flex
              mt={"2"}
              wrap="wrap"
              gap="4"
              justify="center"
              className="w-full"
            >
              {[...selectedImages, ...fileNames].map((image, index) => (
                <div key={index} className="relative w-44 border-2">
                  <AspectRatio ratio={previewRatio}>
                    <Image
                      src={getImageSrc(image)}
                      alt="Uploaded"
                      width={width}
                      height={height}
                      className="rounded-2 object-cover "
                    />
                  </AspectRatio>
                  <IconButton
                    radius="full"
                    color="red"
                    variant="solid"
                    className="absolute top-0 right-0 cursor-pointer"
                    onClick={() => removeImage(index)}
                    type="button"
                  >
                    <PiTrashDuotone />
                  </IconButton>
                </div>
              ))}
            </Flex>
          )}
        </Flex>
      </Box>

      <Badge variant="soft" color="gray" mt="2">
        Image must be {width}x{height}px & max {maxSize}MB.
      </Badge>
    </Box>
  );
};

export default MultiImageInput;
