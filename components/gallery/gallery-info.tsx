// Local Imports
import { Currency } from "../shared/currency";

interface Props {
  product: Product;
};

export const GalleryInfo = ({ product }: Props) => {
  return (
    <div className="divide-y-2">
      <div className="flex flex-col pb-3 md:pb-4">
        <h1 className="text-3xl font-bold md:text-5xl">
          {product.name}
        </h1>
        <p className="text-sm md:text-base">
          {product.category.name}
        </p>
      </div>

      <div className="py-3 md:py-4">
        <Currency
          price={product.price}
          className="text-2xl md:text-4xl"
        />
      </div>

      <div className="grid py-3 sm:grid-cols-2 md:text-lg md:py-4 md:items-center">
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
