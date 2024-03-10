"use client";

// Global Imports
import Image from "next/image";
import { RiShoppingCartLine } from "react-icons/ri";

// Local Imports
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { GalleryInfo } from "./gallery-info";

interface Props {
  product: Product;
};

export const GalleryCarousel = ({ product }: Props) => {
  return (
    <div className="grid gap-4 pb-6 md:gap-6 lg:gap-8 lg:pb-8 lg:grid-cols-2 lg:items-start">
      {/* Carousel */}
      <Carousel className="w-full group">
        <CarouselContent>
          {product.images.map((image) => (
            <CarouselItem key={image.id}>
              <div
                key={image.id}
                className="relative w-full aspect-[3/2] rounded-xl overflow-hidden bg-neutral-200 shadow border lg:aspect-[4/3] lg:rounded-2xl"
              >
                <Image
                  src={image.url}
                  alt=""
                  fill
                  className="object-cover object-center"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="transition duration-200 lg:group-hover:opacity-100 lg:opacity-0">
          <CarouselPrevious className="left-4 md:left-6" />
          <CarouselNext className="right-4 md:right-6" />
        </div>
      </Carousel>

      {/* Info & Actions */}
      <div className="flex flex-col-reverse justify-between gap-4 h-full md:gap-6 lg:flex-col">
        <div className="flex flex-col gap-8 md:gap-12">
          {/* Info */}
          <GalleryInfo
            product={product}
          />

          <Button
            size={"xl"}
            className="gap-2 text-base"
          >
            <span>Add To Cart</span>
            <RiShoppingCartLine
              size={24}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};
