"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ImageViewSlider({
  images,
}: {
  images: string[];
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Tabs
      value={String(current)}
      onValueChange={(val) => {
        setCurrent(Number(val));
      }}
      className="w-full"
    >
      <div className="w-full aspect-[16/9] relative">
        {images.map((src, index) => (
          <TabsContent
            key={index}
            value={String(index)}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out data-[state=inactive]:opacity-0 data-[state=active]:opacity-100 data-[state=active]:animate-fadeIn"
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </TabsContent>
        ))}

        <TabsList className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black-a-5 p-2 rounded-full backdrop-blur-sm">
          {images.map((_, index) => (
            <TabsTrigger
              key={index}
              value={String(index)}
              aria-label={`Go to image ${index + 1}`}
              className="w-3 h-3 rounded-full transition-colors bg-white-a-6 data-[state=active]:bg-white-a-12"
            />
          ))}
        </TabsList>
      </div>
    </Tabs>
  );
}
