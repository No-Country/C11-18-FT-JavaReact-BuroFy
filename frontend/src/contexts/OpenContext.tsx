"use client";

import React, { Dispatch, ReactNode, createContext, useContext, useState } from "react";

type PropsType = {
  children: ReactNode | ReactNode[];
};

interface ContextOpen {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}

const emptyContext = {};
const OpenContext = createContext(emptyContext as ContextOpen);

export function useIsOpen(): ContextOpen {
  return useContext(OpenContext);
}

export const OpenProvider = ({ children }: PropsType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const values = { isOpen, setIsOpen };

  return <OpenContext.Provider value={values}>{children}</OpenContext.Provider>;
};

export default OpenContext;
