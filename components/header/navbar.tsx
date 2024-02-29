// Local Imports
import { getCategories } from "@/actions/get-categories";
import { Container } from "../shared/container";
import { MainNav } from "./main-nav";
import { NavbarActions } from "./navbar-actions";

export const revalidate = 0;

export const Navbar = async () => {
  const categories = await getCategories();

  return (
    <header className="sticky top-0 border-b h-14 shadow">
      <Container className="flex items-center gap-12 h-full">
        {/* <AppLogo /> */}
        <h3 className="text-xl font-extrabold">
          STORE
        </h3>

        <MainNav data={categories} />

        <NavbarActions />
      </Container>
    </header>
  );
};
