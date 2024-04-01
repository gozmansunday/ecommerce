"use client";

// Global Imports
import Link from "next/link";
import { usePathname } from "next/navigation";

// Local Imports
import { cn } from "@/lib/utils/cn";

interface Props {
  data: Category[];
};

export const MainNav = ({ data }: Props) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="flex items-center gap-3 lg:gap-5">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm transition hover:text-black",
            route.active ? "text-black font-semibold" : "text-neutral-500"
          )}
        >
          {route.label}
        </Link>
      ))}

      {/* FOR ADDING SPACE TO THE END OF THE NAVBAR IN MOBILE SCREENS */}
      {/* DO NOT REMOVE!!! */}
      <span className="invisible">a</span>
    </nav>
  );
};
