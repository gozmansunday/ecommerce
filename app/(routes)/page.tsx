import { getBillboard } from "@/actions/get-billboard";
import { Billboard } from "@/components/billboard/billboard";
import { Container } from "@/components/shared/container";

const HomePage = async () => {
  const billboard = await getBillboard("439bd990-980c-4c3f-8e9f-427779b3bba4");

  return (
    <main className="py-4 md:py-6 lg:py-8">
      <Container>
        <div>
          <Billboard data={billboard} />
        </div>
      </Container>
    </main>
  );
};

export default HomePage;