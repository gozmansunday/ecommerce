// Local Imports
import { cn } from "@/lib/utils/cn";
import { Currency } from "../shared/currency";

interface Props {
  product: Product;
  type?: "page" | "modal";
};

export const GalleryInfo = ({
  product,
  type = "page",
}: Props) => {
  return (
    <div className="divide-y-2">
      <div className={cn(
        "flex flex-col pb-3 md:pb-4",
        type === "modal" && "md:pb-3"
      )}>
        <h1 className={cn(
          "text-3xl font-bold md:text-5xl",
          type === "modal" && "md:text-3xl"
        )}>
          {product.name}
        </h1>
        <p className={cn(
          "text-sm md:text-base",
          type === "modal" && "md:text-sm"
        )}>
          {product.category.name}
        </p>
      </div>

      <div className={cn(
        "py-3 md:py-4",
        type === "modal" && "md:py-3"
      )}>
        <Currency
          price={product.price}
          className={cn(
            "text-2xl md:text-4xl",
            type === "modal" && "md:text-2xl"
          )}
        />
      </div>

      <div className={cn(
        "grid py-3 sm:grid-cols-2 md:text-lg md:py-4 md:items-center",
        type === "modal" && "md:text-base md:py-3"
      )}>
        <div className="flex gap-1 items-center">
          <span className="text-neutral-500">{"Size: "}</span>
          <span className="font-bold">{product.size.name}</span>
        </div>
        <div className="flex gap-1 items-center">
          <span className="text-neutral-500">{"Color: "}</span>
          <span className="font-bold">{product.color.name}</span>
          <div
            className="flex-none h-6 ml-1 aspect-square border rounded-full"
            style={{
              backgroundColor: product.color.value
            }}
          />
        </div>
      </div>
    </div>
  );
};
