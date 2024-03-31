"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
// Global Imports
import Image from "next/image";
import { RiCloseCircleLine } from "react-icons/ri";
import { Currency } from "../shared/currency";
import { useCart } from "@/hooks/useCart";

interface Props {
  item: Product;
};

export const CartItem = ({ item }: Props) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const cart = useCart();

  return (
    <div className="flex gap-4">
      <div className="flex-none relative w-20 aspect-square bg-neutral-200 border overflow-hidden rounded shadow md:w-24 md:rounded-md">
        <Image
          src={item.images[0].url}
          alt=""
          fill
          className="object-center object-cover"
        />
      </div>

      <div className="flex flex-col justify-between gap-3 w-full">
        <div
          onClick={() => cart.removeItem(item.id)}
          role="button"
          className="self-start text-neutral-600"
        >
          <RiCloseCircleLine size={isDesktop ? 28 : 24} />
        </div>

        <div className="-space-y-1">
          <p className="text-lg font-bold md:text-xl">
            {item.name}
          </p>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs text-neutral-600 md:text-sm">
              <span>
                {item.size.name}
              </span>
              <span>
                {item.color.name}
              </span>
            </div>

            <Currency
              price={item.price}
              className="text-base md:text-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
