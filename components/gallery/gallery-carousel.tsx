"use client";

// Global Imports
import Image from "next/image";
import { MouseEventHandler, useEffect, useState } from "react";
import { RiShoppingCartLine } from "react-icons/ri";

// Local Imports
import { useCart } from "@/hooks/useCart";
import { cn } from "@/lib/utils/cn";
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "../ui/carousel";
import { GalleryInfo } from "./gallery-info";

interface Props {
  product: Product;
  type?: "page" | "modal";
};

export const GalleryCarousel = ({
  product,
  type = "page",
}: Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const cart = useCart();

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(product);
  };

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className={cn(
      "grid gap-4 pb-6 md:gap-6 lg:gap-8 lg:pb-8 lg:grid-cols-2 lg:items-start",
      type === "modal" && "pb-0 md:gap-4 md:grid-cols-2 md:items-center lg:gap-4 lg:items-center lg:pb-0"
    )}>
      {/* Carousel */}
      <Carousel
        setApi={setApi}
        className="w-full group"
      >
        <CarouselContent>
          {product.images.map((image) => (
            <CarouselItem key={image.id}>
              <div
                key={image.id}
                className={cn(
                  "relative w-full aspect-[3/2] rounded-xl overflow-hidden bg-neutral-200 shadow border lg:aspect-[4/3] lg:rounded-2xl",
                  type === "modal" && "lg:aspect-[3/2] lg:rounded-xl"
                )}
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
          {current > 1 && <CarouselPrevious className="left-4 md:left-6" />}
          {current < count && <CarouselNext className="right-4 md:right-6" />}
        </div>
      </Carousel>

      {/* Info & Actions */}
      <div className="flex flex-col-reverse justify-between gap-4 h-full md:gap-6 lg:flex-col">
        <div className="flex flex-col gap-8 md:gap-12">
          {/* Info */}
          <GalleryInfo
            product={product}
            type={type}
          />

          <Button
            onClick={onAddToCart}
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
