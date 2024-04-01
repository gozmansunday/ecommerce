"use client";

// Global Imports
import { useMutation } from "@tanstack/react-query";
import { RiLoader2Fill } from "react-icons/ri";
import { toast } from "sonner";

// Local Imports
import { useBag } from "@/hooks/useBag";
import { useBagSlider } from "@/hooks/useSlider";
import { checkout } from "@/lib/api/checkout";
import { Currency } from "../shared/currency";
import { NoItems } from "../shared/no-items";
import { Slider } from "../sliders/slider";
import { Button } from "../ui/button";
import { BagItem } from "./bag-item";

export const BagSlider = () => {
  const bagSlider = useBagSlider();
  const { items: bagItems, removeAll } = useBag();

  const totalPrice = bagItems.reduce((total, item) => (
    total + Number(item.price)
  ), 0);

  const checkoutMutation = useMutation({
    mutationFn: checkout,
    onSuccess: (data) => {
      window.location = data.url;
    },
    onError: (error) => {
      toast.error("Something went wrong!");
    }
  });

  const onCheckout = () => {
    checkoutMutation.mutate({
      productIds: bagItems.map((item) => item.id),
    });
  };

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
            disabled={!bagItems.length || checkoutMutation.isPending}
            size={"xl"}
            className="w-full text-base rounded-full"
          >
            {checkoutMutation.isPending ? (
              <RiLoader2Fill
                size={30}
                className="animate-spin"
              />
            ) : (
              <span>Continue To Checkout</span>
            )}
          </Button>
        </div>
      </div>
    </Slider>
  );
};
