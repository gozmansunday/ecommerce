// Local Imports
import { getCategory } from "@/actions/get-category";
import { getColors } from "@/actions/get-colors";
import { getProducts } from "@/actions/get-products";
import { getSizes } from "@/actions/get-sizes";
import { Billboard } from "@/components/billboard/billboard";
import { Filter } from "@/components/category/filter";
import { MobileFilters } from "@/components/category/mobile-filters";
import { NoProducts } from "@/components/products/no-products";
import { ProductCard } from "@/components/products/product-card";
import { Container } from "@/components/shared/container";

interface Props {
  params: {
    categoryId: string;
  };
  searchParams: {
    sizeId: string;
    colorId: string;
  }
}

const CategoryPage = async ({
  params: { categoryId },
  searchParams: { colorId, sizeId }
}: Props) => {
  const products = await getProducts({
    categoryId,
    colorId,
    sizeId,
  });
  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(categoryId);

  return (
    <main className="py-6 md:py-8">
      <Container className="flex flex-col gap-10 md:gap-12">
        <Billboard data={category.billboard} />

        <section className="flex flex-col gap-6">
          <h3 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
            {`${category.name} Products`}
          </h3>

          <div className="grid lg:grid-cols-[1fr_3fr] gap-6 lg:gap-12">
            <div className="flex flex-col">
              {/* Mobile Filter */}
              <MobileFilters
                sizes={sizes}
                colors={colors}
              />

              <div className="hidden flex-col gap-8 lg:flex">
                <Filter
                  name="Sizes"
                  valueKey="sizeId"
                  data={sizes}
                />
                <Filter
                  name="Colors"
                  valueKey="colorId"
                  data={colors}
                />
              </div>
            </div>

            {!products.length ? (
              <NoProducts />
            ) : (
              <div className="grid gap-x-4 gap-y-8 smd:grid-cols-2 md:grid-cols-2 md:gap-x-6 md:gap-y-12 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
                {products.map((product) => (
                  <ProductCard
                    key={product?.id}
                    data={product}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </Container>
    </main>
  );
};

export default CategoryPage;