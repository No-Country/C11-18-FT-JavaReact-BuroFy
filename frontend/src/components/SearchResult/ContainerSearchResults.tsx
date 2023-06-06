"use client";

import React, { useEffect } from "react";
import SearchResult from "./SearchResult";
import { Search } from "@/interfaces/search";
import { useAppDispatch } from "@/hooks";
import { setSearchResults } from "@/redux/features/searchSlice";

type PropsType = { 
    search : Search[];
}

export default function ContainerSearchResults({search}:PropsType) {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    if (search ) {
      dispatch(setSearchResults(search));
    }
  }, [ search , dispatch ]);

  return (
    <>
      <SearchResult/>
    </>
  );
}
