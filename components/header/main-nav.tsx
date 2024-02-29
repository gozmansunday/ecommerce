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
    <nav className="hidden items-center gap-3 md:flex lg:gap-5">
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
    </nav>
  );
};
