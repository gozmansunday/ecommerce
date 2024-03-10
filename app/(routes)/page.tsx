// Local Imports
import { getBillboard } from "@/actions/get-billboard";
import { getProducts } from "@/actions/get-products";
import { Billboard } from "@/components/billboard/billboard";
import { ProductList } from "@/components/products/product-list";
import { Container } from "@/components/shared/container";

const HomePage = async () => {
  const billboard = await getBillboard("439bd990-980c-4c3f-8e9f-427779b3bba4");
  const products = await getProducts({ isFeatured: true });

  return (
    <main className="py-6 md:py-8">
      <Container className="flex flex-col gap-10 md:gap-12">
        <Billboard data={billboard} />

        <ProductList
          title="Featured Products"
          data={products}
        />
      </Container>
    </main>
  );
};

export default HomePage;