// Local Imports
import { getProduct } from "@/actions/get-product";
import { getProducts } from "@/actions/get-products";
import { GalleryCarousel } from "@/components/gallery/gallery-carousel";
import { ProductList } from "@/components/products/product-list";
import { Container } from "@/components/shared/container";

interface Props {
  params: {
    productId: string;
  };
};

const ProductPage = async ({ params: { productId } }: Props) => {
  const product = await getProduct(productId);
  const categoryProducts = await getProducts({
    categoryId: product.category.id
  });
  const suggestedProducts = categoryProducts.filter((product) => product.id !== productId);

  return (
    <main className="py-6 md:py-8">
      <Container className="flex flex-col divide-y-2">
        <GalleryCarousel product={product} />

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