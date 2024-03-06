"use client";

// Global Imports

// Local Imports
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

interface Props {
  images: Image[];
};

const Gallery = ({ images }: Props) => {
  return (
    <Tabs
      defaultValue={images[0].id}
      className="flex flex-col gap-4 w-full md:gap-6"
    >
      {images.map((image) => (
        <TabsContent
          key={image.id}
          value={image.id}
          className="relative w-full aspect-[3/2] rounded-xl overflow-hidden bg-neutral-200 shadow border cursor-pointer lg:aspect-[4/3] lg:rounded-2xl"
        >
          <Image
            src={image.url}
            alt=""
            fill
            className="object-cover object-center"
          />
        </TabsContent>
      ))}

      <TabsList className="flex h-auto items-center justify-start gap-3 bg-inherit p-1 dark:bg-inherit md:gap-4">
        {images.map((image) => (
          <TabsTrigger
            key={image.id}
            value={image.id}
            className="relative w-20 aspect-square rounded-md overflow-hidden bg-neutral-200 shadow border data-[state=active]:ring-2 data-[state=active]:ring-black md:w-24 lg:w-32 lg:rounded-lg"
          >
            <Image
              src={image.url}
              alt=""
              fill
              className="object-cover object-center"
            /> 
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>

  );
};

export default Gallery;