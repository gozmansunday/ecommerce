"use client";

// Local Imports
import { useCart } from "@/hooks/useCart";
import { useCartSlider } from "@/hooks/useSlider";
import { NoItems } from "../shared/no-items";
import { Slider } from "../sliders/slider";
import { Button } from "../ui/button";
import { CartItem } from "./cart-item";

export const CartSlider = () => {
  const cartSlider = useCartSlider();
  const cart = useCart();

  return (
    <Slider
      title="Shopping Cart"
      isOpen={cartSlider.isOpen}
      onClose={cartSlider.onClose}
      headerClassName="bg-neutral-200"
    >
      <div className="flex flex-col justify-between h-full">
        {!cart.items.length ? (
          <NoItems content="No item in cart!" />
        ) : (
          <div className="flex flex-col gap-6 px-6 py-8">
            {cart.items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
              />
            ))}

            <Button
              onClick={() => cart.removeAll()}
              type="button"
              size={"lg"}
              variant={"destructive"}
              className="mt-6 rounded-full"
            >
              Clear Cart
            </Button>
          </div>
        )}

        <div className="sticky bottom-0 px-6 py-4 border-t-2 border-black shadow bg-neutral-200">
          <Button
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
