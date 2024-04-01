// Global Imports
import Link from "next/link";

// Local Imports
import { getCategories } from "@/actions/get-categories";
import { Container } from "../shared/container";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { NavbarActions } from "./navbar-actions";

export const Navbar = async () => {
  const categories = await getCategories();

  return (
    <header className="sticky top-0 z-50 bg-white h-auto lg:border-b lg:shadow lg:h-14">
      <Container className="flex items-center gap-12 h-14 border-b shadow lg:border-none lg:shadow-none lg:h-full">
        {/* <AppLogo /> */}
        <Link href={"/"} className="text-xl font-extrabold">
          STORE
        </Link>

        <div className="hidden lg:block">
          <MainNav data={categories} />
        </div>

        <NavbarActions />
      </Container>


      <Container className="flex items-center h-12 border-b shadow overflow-auto scrollable-element lg:hidden">
        <MobileNav />
      </Container>
    </header>
  );
};
