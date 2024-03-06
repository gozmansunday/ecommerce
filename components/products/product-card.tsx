"use client";

// Global Imports
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TbArrowsMaximize, TbShoppingBagPlus } from "react-icons/tb";

// Local Imports
import { Currency } from "../shared/currency";
import { IconButton } from "../shared/icon-button";

interface Props {
  data: Product;
};

export const ProductCard = ({ data }: Props) => {
  const router = useRouter();

  return (
    <Link href={`/product/${data.id}`}>
      <div className="flex flex-col gap-3 group">
        {/* Product Image and Actions */}
        <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden bg-neutral-200 shadow border cursor-pointer md:aspect-[4/3] lg:rounded-2xl">
          {/* Image */}
          <Image
            src={data?.images[0].url}
            alt={data?.name}
            fill
            className="object-cover"
          />

          {/* Actions */}
          <div className="absolute inset-0 bg-gradient-to-tl from-black/10 via-black/5 to-black/0 lg:opacity-0 lg:transition lg:duration-300 lg:group-hover:opacity-100">
            <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-end gap-3">
              <IconButton
                onClick={() => { }}
                hiddenOnMobile
              >
                <TbArrowsMaximize
                  size={24}
                />
              </IconButton>
              <IconButton
                onClick={() => { }}
              >
                <TbShoppingBagPlus
                  size={24}
                />
              </IconButton>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="flex items-start justify-between gap-6 md:gap-8">
          <div className="flex flex-col">
            <p className="font-bold text-lg line-clamp-2 cursor-pointer md:text-xl">
              {data?.name}
            </p>
            <p className="text-xs font-light text-neutral-500 md:text-sm">
              {data?.category.name}
            </p>
          </div>

          <Currency price={data?.price} />
        </div>
      </div>
    </Link>
  );
};
