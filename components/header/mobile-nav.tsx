// Local Imports
import { getCategories } from "@/actions/get-categories";
import { MainNav } from "./main-nav";

export const MobileNav = async () => {
  const categories = await getCategories();

  return (
    <div className="lg:hidden">
      <MainNav data={categories} />
    </div>
  );
};
