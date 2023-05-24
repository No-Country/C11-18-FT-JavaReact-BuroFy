"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { AuthProvider } from "@/contexts/AuthContext";

type PropsType = {
  children: ReactNode;
};

const queryClient = new QueryClient();

const Providers = ({ children }: PropsType) => {
  //all the providers for client!
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AuthProvider>{children}</AuthProvider>
      </Provider>
    </QueryClientProvider>
  );
};

export default Providers;
