"use client";

// External Imports
import { ReactNode, Suspense } from "react";

// Local Imports
import { CheckPaymentProvider } from "./check-payment-provider";

interface Props {
  children: ReactNode;
};

export const CheckPaymentProviderSuspense = ({ children }: Props) => {
  return (
    <Suspense>
      <CheckPaymentProvider>
        {children}
      </CheckPaymentProvider>
    </Suspense>
  );
};
