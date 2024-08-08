// External Imports
import Image from "next/image";
import Link from "next/link";

// Local Imports
import { cn } from "@/lib/utils/cn";

interface Props {
  className?: string;
};

export const AppLogo = ({ className }: Props) => {
  return (
    <Link
      href={"/"}
      className={cn(
        "flex relative w-8 aspect-square items-center text-2xl font-bold",
        className
      )}
    >
      <Image
        src={"/images/shopping-bag.png"}
        alt="shopping bag"
        fill
      />
    </Link>
  );
};
