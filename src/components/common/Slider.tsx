"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { useEffect, useState } from "react";
import Image from "next/image";

import Slide1 from "../../../public/Slider1.png";
import Slide2 from "../../../public/slide2.png";
import Slide3 from "../../../public/slider3.png";

const images = [
  {
    id: "slide1",
    src: Slide1,
    alt: "Slide 1",
  },
  {
    id: "slide2",
    src: Slide2,
    alt: "Slide 2",
  },
  {
    id: "slide3",
    src: Slide3,
    alt: "Slide 3",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Tabs
      value={images[current].id}
      onValueChange={(val) => {
        const index = images.findIndex((img) => img.id === val);
        setCurrent(index);
      }}
      className="w-full"
    >
      <div className="w-full aspect-[3/1] relative ">
        {images.map((img) => (
          <TabsContent
            key={img.id}
            value={img.id}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out data-[state=inactive]:opacity-0 data-[state=active]:opacity-100 data-[state=active]:animate-fadeIn"
          >
            <Image
              src={img.src}
              alt={img.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </TabsContent>
        ))}

        {/* Trigger dots inside image, bottom center */}
        <TabsList className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black-a-5 p-2 rounded-full backdrop-blur-sm">
          {images.map((img) => (
            <TabsTrigger
              key={img.id}
              value={img.id}
              aria-label={`Go to ${img.alt}`}
              className="w-3 h-3 rounded-full transition-colors bg-white-a-6 data-[state=active]:bg-white-a-12"
            />
          ))}
        </TabsList>
      </div>
    </Tabs>
  );
}
