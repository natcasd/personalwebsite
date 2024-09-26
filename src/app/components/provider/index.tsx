"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import React, { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      {children}
      <ProgressBar
        height="5px"
        color="#808080"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default Providers;
