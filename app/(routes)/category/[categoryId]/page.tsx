// Local Imports
import { getCategory } from "@/actions/get-category";
import { getColors } from "@/actions/get-colors";
import { getProducts } from "@/actions/get-products";
import { getSizes } from "@/actions/get-sizes";
import { Billboard } from "@/components/billboard/billboard";
import { ProductList } from "@/components/products/product-list";
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

        <ProductList
          title={`${category.name} Products`}
          data={products}
        />
      </Container>
    </main>
  );
};

export default CategoryPage;