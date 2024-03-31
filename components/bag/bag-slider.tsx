"use client";

// Global Imports
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

// Local Imports
import { useBag } from "@/hooks/useBag";
import { useBagSlider } from "@/hooks/useSlider";
import { Currency } from "../shared/currency";
import { NoItems } from "../shared/no-items";
import { Slider } from "../sliders/slider";
import { Button } from "../ui/button";
import { BagItem } from "./bag-item";

export const BagSlider = () => {
  const searchParams = useSearchParams();

  const bagSlider = useBagSlider();
  const { items: bagItems, removeAll } = useBag();

  const totalPrice = bagItems.reduce((total, item) => (
    total + Number(item.price)
  ), 0);

  const onCheckout = async () => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
      productIds: bagItems.map((item) => item.id),
    });

    window.location = response.data.url;
  };

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment complete.");
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Something went wrong!");
    }
  }, [searchParams, removeAll]);

  return (
    <Slider
      title="Shopping Bag"
      isOpen={bagSlider.isOpen}
      onClose={bagSlider.onClose}
      headerClassName="bg-neutral-200"
    >
      <div className="flex flex-col justify-between h-full">
        {!bagItems.length ? (
          <NoItems content="No item in bag!" />
        ) : (
          <div className="flex flex-col gap-6 px-6 py-8">
            {bagItems.map((item) => (
              <BagItem
                key={item.id}
                item={item}
              />
            ))}

            <Button
              onClick={() => removeAll()}
              type="button"
              size={"lg"}
              variant={"destructive"}
              className="mt-6 rounded-full"
            >
              Clear Bag
            </Button>
          </div>
        )}

        <div className="sticky bottom-0 flex flex-col gap-4 px-6 py-6 border-t border-black shadow bg-neutral-200">
          <div className="flex items-center gap-4">
            <div className="flex-none">Order Total</div>
            <div className="border-y border-black w-full" />
            <Currency
              price={totalPrice}
              className="flex-none text-lg md:text-xl"
            />
          </div>

          <Button
            onClick={onCheckout}
            size={"xl"}
            className="w-full text-base rounded-full"
          >
            Continue To Checkout
          </Button>
        </div>
      </div>
    </Slider>
  );
};
