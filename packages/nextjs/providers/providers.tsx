"use client";

import { PropsWithChildren } from "react";
import { ThemeProvider } from "./ThemeProvider";
import { AlchemyClientState } from "@account-kit/core";
import { AlchemyAccountProvider } from "@account-kit/react";
import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";
import { config, queryClient } from "~~/config";

export const Providers = (props: PropsWithChildren<{ initialState?: AlchemyClientState }>) => {
  return (
    <ThemeProvider enableSystem>
      <AlchemyAccountProvider config={config} queryClient={queryClient} initialState={props.initialState}>
        <ScaffoldEthAppWithProviders>{props.children}</ScaffoldEthAppWithProviders>
      </AlchemyAccountProvider>
    </ThemeProvider>
  );
};
