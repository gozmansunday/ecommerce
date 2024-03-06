// Local Imports
import { getProduct } from "@/actions/get-product";
import { getProducts } from "@/actions/get-products";
import Gallery from "@/components/gallery";
import { ProductList } from "@/components/products/product-list";
import { Container } from "@/components/shared/container";

interface Props {
  params: {
    productId: string;
  };
};

const ProductPage = async ({ params: { productId } }: Props) => {
  const product = await getProduct(productId);
  const suggestedProducts = await getProducts({
    categoryId: product.category.id
  });

  return (
    <main className="py-6 md:py-8">
      <Container className="flex flex-col divide-y-2">
        <div className="grid gap-8 pb-6 lg:pb-8 lg:grid-cols-2 lg:items-start lg:gap-16">
          <Gallery images={product.images} />
          <div>
            {/* Info */}
          </div>
        </div>

        <div className="pt-6 lg:pt-8">
          <ProductList
            title="Related Products"
            data={suggestedProducts}
          />
        </div>
      </Container>
    </main>
  );
};

export default ProductPage;