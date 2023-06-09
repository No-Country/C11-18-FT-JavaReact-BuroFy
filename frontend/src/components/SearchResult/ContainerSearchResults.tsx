"use client";

import React, { useEffect } from "react";
import SearchResult from "./SearchResult";
import { ObjectSearch, Search } from "@/interfaces/search";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setSearchResults } from "@/redux/features/searchSlice";
import SortFilter from "./SortFilter";

type PropsType = { 
    search : Search[];
}

export default function ContainerSearchResults({search}:PropsType) {
  const dispatch = useAppDispatch();
  
  const {searchs}: ObjectSearch = useAppSelector((state)=> state.search);

  useEffect(() => {
    if (search ) {
      dispatch(setSearchResults(search));
    }
  }, [search , dispatch]);

  console.log(searchs);
  return (
    <>
      <SortFilter/>
      {searchs && searchs.map(search => (
        <SearchResult key={search.id} search={search}/>
      )) }
    </>
  );
}
