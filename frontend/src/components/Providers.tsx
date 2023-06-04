"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

import { OpenProvider } from "@/contexts/OpenContext";

type PropsType = {
  children: ReactNode;
};

const queryClient = new QueryClient();

const Providers = ({ children }: PropsType) => {
  //all the providers for client!
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <OpenProvider>
          {children}
        </OpenProvider>
      </Provider>
    </QueryClientProvider>
  );
};

export default Providers;
