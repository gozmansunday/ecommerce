// Local Imports
import { cn } from "@/lib/utils/cn";
import { moneyFormatter } from "@/lib/utils/money";

interface Props {
  price: string | number;
  className?: string;
};

export const Currency = ({ price, className }: Props) => {
  return (
    <div className={cn("font-bold text-xl md:text-2xl", className)}>
      {moneyFormatter.format(Number(price))}
    </div>
  );
};
