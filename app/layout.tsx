// External Imports
import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { ReactNode } from "react";
import { Toaster } from "sonner";

// Local Imports
import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/header/navbar";
import { cn } from "@/lib/utils/cn";
import { CheckPaymentProviderSuspense } from "@/providers/check-payment-provider-suspense";
import { ModalProvider } from "@/providers/modal-provider";
import QueryProvider from "@/providers/query-provider";
import { SliderProvider } from "@/providers/slider-provider";
import "@/styles/globals.css";

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
        <QueryProvider>
          <CheckPaymentProviderSuspense>
            <ModalProvider />
            <SliderProvider />
            <NextTopLoader
              showSpinner={false}
              height={3}
              crawlSpeed={500}
              speed={400}
              color="#000000"
            />
            <Toaster
              position="bottom-right"
              richColors
              visibleToasts={3}
              duration={3000}
              closeButton
            />
            <div>
              <Navbar />
              {children}
            </div>
            <Footer />
          </CheckPaymentProviderSuspense>
        </QueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;