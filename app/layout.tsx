// Global Imports
import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import { ReactNode } from "react";
import { Toaster } from "sonner";

// Local Imports
import { Footer } from "@/components/footer/footer";
import { cn } from "@/lib/utils/cn";
import "@/styles/globals.css";
import { Navbar } from "@/components/header/navbar";

// Metadata
export const metadata: Metadata = {
  title: "E-Commerce Store",
  description: "E-Commerce Store",
};

const font = Rethink_Sans({
  subsets: ["latin"],
  display: "swap",
});

interface Props {
  children: ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en" className={cn("", font.className)}>
      <body className="flex flex-col justify-between">
        <Toaster
          position="bottom-right"
          richColors={true}
          visibleToasts={3}
          duration={3000}
        />
        <div>
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;