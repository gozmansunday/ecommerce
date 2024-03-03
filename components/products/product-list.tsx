import { NoProducts } from "./no-products";
import { ProductCard } from "./product-card";

interface Props {
  title: string;
  data: Product[];
}

export const ProductList = ({ title, data }: Props) => {
  return (
    <section className="flex flex-col gap-6">
      <h3 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
        {title}
      </h3>
      {!data.length ?
        <NoProducts /> :
        <div className="grid gap-x-4 gap-y-8 smd:grid-cols-2 md:grid-cols-3 md:gap-x-6 md:gap-y-12 lg:grid-cols-4 2xl:grid-cols-5">
          {data.map((product) => (
            <ProductCard
              key={product?.id}
              data={product}
            />
          ))}
        </div>}
    </section>
  );
};
